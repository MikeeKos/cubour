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
        return res.status(401).json({ message: "User is not logged in", hideNotification: true });
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

        console.log("Check whole seed object")
        console.log(seed);
        console.log("check whole user")
        console.log(checkedUser);

        function markLevelAsCompleted(level, levelData) {
          return levelData.map(item => {
            const itemData = item.toObject(); // Konwertujemy każdy dokument na czysty obiekt JS
            if (itemData.level === level) {
              itemData.isCompleted = true; // Zmieniamy status na zakończony
            }
            return itemData;
          });
        }

        const changedLevelArray = markLevelAsCompleted(parseInt(seed.level), checkedUser.levelCompleted)
        console.log("Changed Level Array")
        console.log(changedLevelArray);
        checkedUser.levelCompleted = changedLevelArray;


        // console.log(seed);

        const seedLeaderboardLength = seed.leaderboard.length;

        function removeColonsAndDots(timeString) {
          return timeString.replace(/[:.]/g, "");
        }

        const finishTime = req.body.formattedFinishTime;

        const formattedTime = removeColonsAndDots(finishTime);

        // Pobierz i posortuj istniejące wyniki rosnąco według czasu
        let leaderboard = [...seed.leaderboard].sort((a, b) =>
          a.time.localeCompare(b.time)
        );

        // Znajdź miejsce, na które pasuje nowy czas
        let insertPosition = leaderboard.findIndex(
          (entry) => entry.time.localeCompare(formattedTime) > 0
        );
        const leaderPlace = insertPosition + 1;

        // Stwórz nowy wpis dla leaderboarda
        const newEntry = {
          place: 0, // Tymczasowe zero, aktualizujemy poniżej
          time: formattedTime,
          leader: checkedUser._id,
          leaderUsername: checkedUser.username,
        };

        // Wstaw nowy wynik w odpowiednie miejsce lub na koniec, jeśli jest lepszy niż wszyscy
        if (insertPosition === -1 && leaderboard.length < 3) {
          leaderboard.push(newEntry);
        } else if (insertPosition !== -1) {
          leaderboard.splice(insertPosition, 0, newEntry);
          leaderboard = leaderboard.slice(0, 3); // Zapewniamy, że nie ma więcej niż 3 wpisy
        }

        // Aktualizuj miejsca na podium po wstawieniu nowego wyniku
        leaderboard.forEach((entry, index) => {
          entry.place = index + 1;
        });

        // Zaktualizuj leaderboard w dokumencie
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
        res.status(500).json({ message: "Something went wrong in here" });
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
