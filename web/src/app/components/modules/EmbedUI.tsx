"use client"
import React, { useEffect, useState } from "react"
import clsx from "clsx"
import { CompositionItemEmbed, Embed } from "@/app/types/schema"
import { VideoWrapper } from "../ui/player"
// import { Embed } from "@/app/types/schema"
import { hasCookie } from "cookies-next"

type Props = {
  input: CompositionItemEmbed
}

const EmbedUI = ({ input }: Props) => {
  const embed: Embed = input.embed as Embed
  const [ready, setReady] = useState<boolean>(false)
  const [showPlayer, setShowPlayer] = useState<boolean>(true)

  useEffect(() => {
    setReady(true)

    const show = hasCookie("localConsent")
    setShowPlayer(show)
  }, [])

  return (
    <section className={clsx("module module--embed w-full p-sm md:p-md")}>
      {ready && (
        <div
          className="inner"
          style={{
            aspectRatio: embed.ratio,
          }}
        >
          {embed && embed.url && (
            <VideoWrapper
              url={embed.url}
              // showControls={input.showControls}
              // // showControls={true}
              // aspectRatio={input.aspectRatio || "16 / 9"}
              // loop={input.loop || false}
              // autoplay={input.autoplay || false}
            />
          )}
        </div>
      )}
    </section>
  )
}

export default EmbedUI
