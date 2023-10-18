// import React from 'react';
// import SanityTexte from '../ui/SanityTexte';
// import SanityImageUI from '../ui/SanityImageUI';
// import clsx from 'clsx';
// import { _localizeField } from 'utils/utils';
// // import ImageUI from "./ImageUI";
// import { SanityImageAsset } from 'graphql-types';

// type Props = {
//   input: {
//     title: String;
//     text: Object;
//     image: SanityImageAsset;
//   };
// };

// const TexteImageUI = ({ input }: Props): JSX.Element => {
//   const { title, text, image } = input;
//   // console.log(input);
//   return (
//     <section className="module module--texte-image">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-5">
//             <SanityImageUI asset={image} caption={title} />
//           </div>
//           <div className="col-md-7">
//             <h2 className="text-lg mb-md">{title}</h2>
//             <SanityTexte input={_localizeField(text)} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TexteImageUI;
