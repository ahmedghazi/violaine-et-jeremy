// import React from "react";
// import SanityTexte from "../SanityTexte";
// import SanityImage from "../SanityImage";
// import clsx from "clsx";
// // import ImageUI from "./ImageUI";

// const TexteImagesUI = ({ input }) => {
//   const { texte, images } = input;
//   // console.log(image);
//   return (
//     <section className='module-texte-images mb-lg'>
//       <div className='md:flex md:justify-between'>
//         <div className='col-texte md:w-1/3 mb-md md:mb-0 '>
//           <div className='md:sticky md:top-xl'>
//             <SanityTexte input={texte} />
//           </div>
//         </div>
//         <div className='col-images  md:w-3/6'>
//           <div className={clsx("grid", `grid-cols-${images.length} gap-sm`)}>
//             {images.map(({ image }, i) => (
//               <div key={i}>
//                 <SanityImage
//                   input={image}
//                   caption={image.caption}
//                   showPlaceholder={false}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TexteImagesUI;
