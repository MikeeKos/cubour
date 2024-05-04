import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
import User from "../../../models/User";
import Seed from "../../../models/Seed";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

async function handler(req, res) {
  const { method } = req;

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
        return res.status(401).json({ message: "User is not logged in" });
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

      function combineSeedData(data) {
        return data.reduce((acc, item) => {
          Object.entries(item).forEach(([key, value]) => {
            if (key === "dynamicGridCount") {
              acc += value.toString().padStart(2, "0");
            } else {
              acc += value;
            }
          });
          return acc;
        }, "");
      }
      const entireSeed = combineSeedData(req.body);

      try {
        const seedData = {
          seed: entireSeed,
          level: "unverified",
        };
        const seed = new Seed(seedData);
        seed.creator = checkedUser;
        await seed.save();

        res.status(201).json({
          message: "success",
        });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong in backend" });
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
