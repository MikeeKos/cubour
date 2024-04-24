import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
// import Comment from "../../../models/Comment";
// import Lake from "../../../models/Lake";
import User from "../../../models/User";
import Seed from "../../../models/Seed";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
// import Joi from "joi";

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

      //Server side validation of req.body
      // const reqBodySchema = Joi.object({
      //   text: Joi.string().min(1).max(1000).required(),
      // }).required();
      // const validity = reqBodySchema.validate(req.body);
      // if (validity.error) {
      //   return res
      //     .status(401)
      //     .json({ message: "Failed server side validation" });
      // }
      // const { text } = req.body;

      console.log(req.body);

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

      //create new comment
      // const newComment = {
      //   email: checkedUser.email,
      //   name: checkedUser.username,
      //   text: text,
      // };

      //add comment to database
      try {
        // const comment = new Comment(newComment);
        // const lake = await Lake.findById(lakeId);
        // if (!lake) {
        //   return res
        //     .status(400)
        //     .json({ message: "failed to find lake with ID in url" });
        // }
        // lake.comments.push(comment);
        // comment.author = checkedUser;
        // await comment.save();
        // await lake.save();

        const seedData = {
          seed: entireSeed,
          level: "unverified",
        };
        const seed = new Seed(seedData);
        seed.creator = checkedUser;
        await seed.save();

        // const seed = new Seed({
        //   seed: "X0000ffffn0001ffffs0002ffffu0003ffffn0004ffffn0005ffffe0006ffffn0007ffftc0008ffffW0009ffffn0100ffftn0101tfftw0102ffffn0103ttftt0104ftttn0105ffffn0106ffffn0107ffffx0108tttfn0109ffffo0200tfffn0201fffff0202ffftn0203ttffn0204ftffn0205tttfV0206ffffn0207ttttv0208ffftb0209ffffn0300ttffn0301ttttF0302ffffn0303tftfn0304ttffn0305tfftn0306ffffn0307tfttn0308tttfn0309ffffn0400tttfn0401ttttx0402ffffn0403tfffn0404ffftn0405ftttT0406ffffn0407ftffn0408fttfO0409ftffn0500fftfn0501ttttX0502ftffn0503fftfn0504tfftn0505ffttn0506ftffn0507ttffn0508tftfn0509ttttn0600ffttn0601ftttn0602ftffn0603ffffn0604ffffn0605tfftn0606ffttn0607ttftn0608tftfn0609tfffn0700fttfn0701ttffn0702ttffn0703ffttn0704ttttn0705ftffn0706ftffn0707ffffn0708ftttn0709tfttn0800ffftn0801fftfn0802tfttn0803tttfn0804fttfn0805ttffn0806tfffn0807ffttn0808ftftn0809fttfn0900ttffn0901ttffn0902tttfn0903ffttn0904tttfn0905tfftn0906tttfn0907fttfn0908ftftx0909tttt",
        // });
        // await seed.save();

        res.status(201).json({
          message: "success",
        });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong in backend" });
        return;
      }
      break;

    // case "GET":
    //   //Get comment for specific object, used in components/comments/comments.js
    //   try {
    //     const lake = await Lake.findById(lakeId).populate("comments");
    //     if (!lake) {
    //       return res.status(400).json({ message: "Failed to find lake" });
    //     }
    //     const result = lake.comments;

    //     res
    //       .status(200)
    //       .json({ message: "Success", comments: result });
    //   } catch (error) {
    //     res.status(500).json({ message: "Could not find comments" });
    //   }

    //   break;
    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }

  mongoose.connection.close();
}

export default handler;






// import { connectDatabase } from "../../../helpers/db-util";
// import mongoose from "mongoose";
// import User from "../../../models/User";
// import Seed from "../../../models/Seed";

// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]";

// async function handler(req, res) {
//   const { method } = req;

//   try {
//     await connectDatabase();
//   } catch (error) {
//     return res.status(503).json({ message: "Failed to connect to server" });
//   }

//   switch (method) {
//     case "POST":
//       const session = await getServerSession(req, res, authOptions);
//       if (!session) {
//         return res.status(401).json({ message: "User is not logged in" });
//       }

//       const JSONemailFromSession = JSON.stringify(session.user.email);
//       const JSemailFromSession = JSON.parse(JSONemailFromSession);
//       let checkedUser;
//       try {
//         checkedUser = await User.findOne({ email: JSemailFromSession });
//         if (!checkedUser) {
//           return res.status(400).json({ message: "Cannot find matching user" });
//         }
//       } catch (error) {
//         return res.status(500).json({ message: "Something went wrong" });
//       }

//       console.log(req.body);

//       function combineSeedData(data) {
//         return data.reduce((acc, item) => {
//           Object.entries(item).forEach(([key, value]) => {
//             if (key === "dynamicGridCount") {
//               acc += value.toString().padStart(2, "0");
//             } else {
//               acc += value;
//             }
//           });
//           return acc;
//         }, "");
//       }
//       const entireSeed = combineSeedData(req.body);
//       try {
//         const seedData = {
//           seed: entireSeed,
//           level: "unverified",
//         };
//         const seed = new Seed(seedData);
//         seed.creator = checkedUser;
//         await seed.save();

//         res.status(201).json({
//           message: "success",
//         });
//       } catch (error) {
//         res.status(500).json({ message: "Something went wrong in backend" });
//         return;
//       }
//       break;
//     default:
//       res.status(405).json({ message: "Method not allowed" });
//       break;
//   }

//   mongoose.connection.close();
// }

// export default handler;
