import React from "react"
import clsx from "clsx"
import { CompositionItemEmbed, Embed } from "@/app/types/schema"
import { VideoWrapper } from "../ui/player"
// import { Embed } from "@/app/types/schema"

type Props = {
  input: CompositionItemEmbed
}

const EmbedUI = ({ input }: Props) => {
  // console.log(input.video);
  return (
    <section
      className={clsx(
        "module module--embed w-full p-sm md:p-md"
        // input.width ? 'has-width' : '',
      )}
      style={
        {
          // width: input.width ? `calc(${input.width}% - var(--space-sm))` : '100%',
          // width: input.width ? `calc(${input.width}% ` : '100%',
          // '--module-width': input.width ? `${input.width}%` : '100%',
        }
      }
    >
      <div
        className="inner"
        style={{
          // aspectRatio: input?.aspectRatio,
          aspectRatio: "640 / 304",
        }}
      >
        {/* <pre>{JSON.stringify(input, null, 2)}</pre> */}
        {input.embed && input.embed.url && (
          <VideoWrapper
            url={input.embed.url}
            // showControls={input.showControls}
            // // showControls={true}
            // aspectRatio={input.aspectRatio || "16 / 9"}
            // loop={input.loop || false}
            // autoplay={input.autoplay || false}
          />
        )}
      </div>
    </section>
  )
}

export default EmbedUI
