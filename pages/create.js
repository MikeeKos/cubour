import React from "react";

function CreateMap() {
  return (
    <React.Fragment>
      <div>Create Map</div>
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
