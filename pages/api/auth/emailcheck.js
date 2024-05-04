import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
import User from "../../../models/User";

async function handler(req, res) {
  const method = req.method;

  try {
    await connectDatabase();
  } catch (error) {
    return res.status(503).json({ message: "Failed to connect to server" });
  }

  switch (method) {
    case "POST":
      try {
        const { email } = req.body;

        const checkedUser = await User.findOne({ email: email });
        if (!checkedUser) {
          return res
            .status(200)
            .json({ message: "user in not taken", isAvaiable: true });
        } else {
          return res
            .status(200)
            .json({ message: "user is already taken", isAvaiable: false });
        }
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
      }
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
  res.status(200).json({ message: "reached" });

  mongoose.connection.close();
}

export default handler;
