import React from "react"
import clsx from "clsx"
import Image from "next/image"
import { CompositionItemImage, SanityImageAsset } from "@/app/types/schema"

type Props = {
  input: CompositionItemImage
}

const ImageUI = ({ input }: Props): JSX.Element => {
  // console.log(input);
  const image: SanityImageAsset | any = input.image?.asset as
    | SanityImageAsset
    | any
  return (
    <div
      className={clsx("module module--image ")}
      style={
        {
          // width: input.width ? `calc(${input.width}% - var(--space-sm))` : '100%',
          // '--module-width': input.width ? `${input.width}%` : '100%',
        }
      }
    >
      {image && (
        <Image
          src={image.url}
          width={image?.metadata?.dimensions.width}
          height={image?.metadata?.dimensions.height}
          alt={input.title || "alt"}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          blurDataURL={image?.metadata?.lqip}
          placeholder="blur"
        />
      )}
    </div>
  )
}

export default ImageUI
