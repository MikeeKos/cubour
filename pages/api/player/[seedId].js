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

      console.log(req.body);
      console.log(checkedUser);

      //add comment to database
      try {
        const seed = await Seed.findById(seedId);
        if (!seed) {
          return res.status(400).json({ message: "Failed to find lake" });
        }
        // console.log(seed);

        function removeColonsAndDots(timeString) {
          return timeString.replace(/[:.]/g, "");
        }

        const finishTime = req.body.formattedFinishTime;

        console.log(finishTime);
        console.log(removeColonsAndDots(finishTime));

        const formattedTime = removeColonsAndDots(finishTime);
        // Pobierz i posortuj istniejące wyniki rosnąco według czasu
        let leaderboard = [...seed.leaderboard].sort((a, b) =>
          a.time.localeCompare(b.time)
        );
        console.log(leaderboard);

        // Znajdź miejsce, na które pasuje nowy czas
        let insertPosition = leaderboard.findIndex(
          (entry) => entry.time.localeCompare(formattedTime) > 0
        );
        console.log(insertPosition);
        // const leaderPlace = insertPosition + 1;

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
        seed.leaderboard = leaderboard;
        seed.markModified("leaderboard");
        console.log(seed.leaderboard);


        // console.log("Here should be place")
        // console.log(leaderPlace);
        // checkedUser.records.push({
        //   // place:
        //   // lvl:
        //   // time:
        // });

        // Zapisz zmiany w bazie danych
        await seed.save();

        // async function updateLeaderboard(seed, newTime, checkedUser) {
        //   const formattedTime = removeColonsAndDots(newTime);

        //   // Pobierz i posortuj istniejące wyniki rosnąco według czasu
        //   let leaderboard = [...seed.leaderboard].sort((a, b) =>
        //     a.time.localeCompare(b.time)
        //   );
        //   console.log(leaderboard);

        //   // Znajdź miejsce, na które pasuje nowy czas
        //   let insertPosition = leaderboard.findIndex(
        //     (entry) => entry.time.localeCompare(formattedTime) > 0
        //   );
        //   console.log(insertPosition);

        //   // Stwórz nowy wpis dla leaderboarda
        //   const newEntry = {
        //     place: 0, // Tymczasowe zero, aktualizujemy poniżej
        //     time: formattedTime,
        //     leader: checkedUser._id,
        //     leaderUsername: checkedUser.username,
        //   };

        //   // Wstaw nowy wynik w odpowiednie miejsce lub na koniec, jeśli jest lepszy niż wszyscy
        //   if (insertPosition === -1 && leaderboard.length < 3) {
        //     leaderboard.push(newEntry);
        //   } else if (insertPosition !== -1) {
        //     leaderboard.splice(insertPosition, 0, newEntry);
        //     leaderboard = leaderboard.slice(0, 3); // Zapewniamy, że nie ma więcej niż 3 wpisy
        //   }

        //   // Aktualizuj miejsca na podium po wstawieniu nowego wyniku
        //   leaderboard.forEach((entry, index) => {
        //     entry.place = index + 1;
        //   });

        //   // Zaktualizuj leaderboard w dokumencie
        //   seed.leaderboard = leaderboard;
        //   seed.markModified("leaderboard");
        //   console.log(seed.leaderboard);

        //   // Zapisz zmiany w bazie danych
        //   await seed.save();
        // }

        // updateLeaderboard(seed, finishTime, checkedUser);

        // for (let place of places) {
        //   // Sprawdź, czy na liście nie ma jeszcze wpisu dla danego miejsca
        //   if (!seed.leaderboard.some((item) => item.place === place)) {
        //     seed.leaderboard.push({
        //       place: place,
        //       time: removeColonsAndDots(finishTime),
        //       leader: checkedUser,
        //       leaderUsername: checkedUser.username,
        //     });
        //     break; // Przerwij pętlę po dodaniu wpisu
        //   }
        // }

        // seed.leaderboard = uploadedImages.map((obj) => ({
        //   place: 1,
        //   time: "0059000",
        //   leader: checkedUser,
        // }));

        // seed.leaderboard.push({
        //   place: 1,
        //   time: "0000500",
        //   leader: checkedUser,
        //   leaderUsername: checkedUser.username,
        // });

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

        // const seedData = {
        //   seed: entireSeed,
        //   level: "unverified",
        // };
        // const seed = new Seed(seedData);
        // seed.creator = checkedUser;

        // const seed = new Seed({
        //   seed: "X0000ffffn0001ffffs0002ffffu0003ffffn0004ffffn0005ffffe0006ffffn0007ffftc0008ffffW0009ffffn0100ffftn0101tfftw0102ffffn0103ttftt0104ftttn0105ffffn0106ffffn0107ffffx0108tttfn0109ffffo0200tfffn0201fffff0202ffftn0203ttffn0204ftffn0205tttfV0206ffffn0207ttttv0208ffftb0209ffffn0300ttffn0301ttttF0302ffffn0303tftfn0304ttffn0305tfftn0306ffffn0307tfttn0308tttfn0309ffffn0400tttfn0401ttttx0402ffffn0403tfffn0404ffftn0405ftttT0406ffffn0407ftffn0408fttfO0409ftffn0500fftfn0501ttttX0502ftffn0503fftfn0504tfftn0505ffttn0506ftffn0507ttffn0508tftfn0509ttttn0600ffttn0601ftttn0602ftffn0603ffffn0604ffffn0605tfftn0606ffttn0607ttftn0608tftfn0609tfffn0700fttfn0701ttffn0702ttffn0703ffttn0704ttttn0705ftffn0706ftffn0707ffffn0708ftttn0709tfttn0800ffftn0801fftfn0802tfttn0803tttfn0804fttfn0805ttffn0806tfffn0807ffttn0808ftftn0809fttfn0900ttffn0901ttffn0902tttfn0903ffttn0904tttfn0905tfftn0906tttfn0907fttfn0908ftftx0909tttt",
        // });
        // await seed.save();

        // await seed.save();

        res.status(201).json({
          message: "success",
        });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong in here?" });
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
