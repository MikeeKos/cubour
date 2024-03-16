import React from "react";
// import MainGame from "../../components/play/main-game";
// import PlayPage from "../../components/play/play-page";
// import mongoose from "mongoose";
// import { connectDatabase } from "../../helpers/db-util";
// import Seed from "../../models/Seed";

function Play(props) {
  console.log(props.seed)

  return (
    <React.Fragment>
      {/* <MainGame /> */}
      {/* <PlayPage /> */}
      <div className="w-screen h-screen bg-pageMenu text-page1 text-3xl font-extrabold tracking-wider">Not here, add seedId</div>
    </React.Fragment>
  );
}

// export async function getServerSideProps(context) {
//   let client;
//   try {
//     client = await connectDatabase();
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }

//   try {
//     const seed = await Seed.find({});
//     console.log(seed[0].seed)

//     mongoose.connection.close();
//     return {
//       props: {
//         seed: JSON.parse(JSON.stringify(seed))
//       },
//     };
//   } catch (error) {
//     mongoose.connection.close();
//     return {
//       notFound: true,
//     };
//   }
// }

export default Play;
