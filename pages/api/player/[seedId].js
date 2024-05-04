import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
import User from "../../../models/User";
import Seed from "../../../models/Seed";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

async function handler(req, res) {
  const {
    query: { seedId },
    method,
  } = req;

  let shouldShowNotif = false;

  //Establish connection to the database
  try {
    await connectDatabase();
  } catch (error) {
    return res.status(503).json({ message: "Failed to connect to server" });
  }

  switch (method) {
    case "POST":
      //Check if user is logged in
      const session = await getServerSession(req, res, authOptions);
      if (!session) {
        return res
          .status(401)
          .json({ message: "User is not logged in", hideNotification: true });
      }

      //Find user with email that match email from session
      const JSONemailFromSession = JSON.stringify(session.user.email);
      const JSemailFromSession = JSON.parse(JSONemailFromSession);
      let checkedUser;
      try {
        checkedUser = await User.findOne({ email: JSemailFromSession });
        if (!checkedUser) {
          return res.status(400).json({ message: "Cannot find matching user" });
        }
      } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
      }

      //add comment to database
      try {
        const seed = await Seed.findById(seedId);
        if (!seed) {
          return res.status(400).json({ message: "Failed to find lake" });
        }

        function markLevelAsCompleted(level, levelData) {
          return levelData.map((item) => {
            const itemData = item.toObject();
            if (itemData.level === level) {
              itemData.isCompleted = true;
            }
            return itemData;
          });
        }

        const changedLevelArray = markLevelAsCompleted(
          parseInt(seed.level),
          checkedUser.levelCompleted
        );
        checkedUser.levelCompleted = changedLevelArray;

        const seedLeaderboardLength = seed.leaderboard.length;

        function removeColonsAndDots(timeString) {
          return timeString.replace(/[:.]/g, "");
        }

        const finishTime = req.body.formattedFinishTime;

        const formattedTime = removeColonsAndDots(finishTime);

        let leaderboard = [...seed.leaderboard].sort((a, b) =>
          a.time.localeCompare(b.time)
        );

        let insertPosition = leaderboard.findIndex(
          (entry) => entry.time.localeCompare(formattedTime) > 0
        );
        const leaderPlace = insertPosition + 1;

        const newEntry = {
          place: 0,
          time: formattedTime,
          leader: checkedUser._id,
          leaderUsername: checkedUser.username,
        };

        if (insertPosition === -1 && leaderboard.length < 3) {
          leaderboard.push(newEntry);
        } else if (insertPosition !== -1) {
          leaderboard.splice(insertPosition, 0, newEntry);
          leaderboard = leaderboard.slice(0, 3);
        }

        leaderboard.forEach((entry, index) => {
          entry.place = index + 1;
        });

        if (seedLeaderboardLength < 3 || leaderPlace > 0) {
          shouldShowNotif = true;
        }
        seed.leaderboard = leaderboard;
        seed.markModified("leaderboard");

        await checkedUser.save();
        await seed.save();

        res.status(201).json({
          message: "success",
          shouldShowNotif,
        });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        return;
      }
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }

  mongoose.connection.close();
}

export default handler;
