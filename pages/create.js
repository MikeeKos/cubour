import React from "react";
import Create from "../components/create/create";

function CreateMap() {
  return (
    <React.Fragment>
      <Create />
    </React.Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/auth",
//         permanent: false,
//       },
//     };
//   }

// }

export default CreateMap;
