// import React from 'react';
// // import { SanityModuleEmbed } from '../../../graphql-types';
// import { VideoWrapper } from 'components/ui/player';
// import clsx from 'clsx';
// import { Embed } from '@/app/types/schema';

// type Props = {
//   input: Embed;
// };

// const EmbedUI = ({ input }: Props) => {
//   // console.log(input.video);
//   return (
//     <section
//       className={clsx(
//         'module module--embed w-full p-sm md:p-md',
//         // input.width ? 'has-width' : '',
//       )}
//       style={{
//         // width: input.width ? `calc(${input.width}% - var(--space-sm))` : '100%',
//         // width: input.width ? `calc(${input.width}% ` : '100%',
//         // '--module-width': input.width ? `${input.width}%` : '100%',
//       }}
//     >
//       <div
//         className="inner"
//         style={{
//           aspectRatio: input.video?.aspectRatio,
//         }}
//       >
//         {input.video && input.video.url && (
//           <VideoWrapper
//             url={input.video.url}
//             showControls={input.video.showControls}
//             // showControls={true}
//             aspectRatio={input.video.aspectRatio || '16 / 9'}
//             loop={input.video.loop || false}
//             autoplay={input.video.autoplay || false}
//           />
//         )}
//       </div>
//     </section>
//   );
// };

// export default EmbedUI;
