// import React from "react";
// import SanityImage from "../SanityImage";

// const ImagesUI = ({ input }) => {
//   // console.log(input);
//   const column = Math.round(10 / input.images.length);
//   // const column = 10 / input.images.length;
//   // console.log(column, input.images.length);
//   return (
//     <section className='module images-ui -mx-sm md:mx-0 mb-lg'>
//       <div className='row center-xs bottom-xs'>
//         <div className='col-md-6 col-xs-10'>
//           <div className='row'>
//             {input.images.map((item, i) => (
//               <div className={`col-md-${column} col-xs-10 text-left `} key={i}>
//                 <SanityImage input={item.image} caption={item.caption} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImagesUI;
