import React from "react"
import Image from "next/image"
import { Project, SanityImageAsset, Space } from "../types/schema"
import Link from "next/link"
import { _linkResolver } from "../utils/utils"
import WorkTitle from "./WorkTitle"
import ImageColorPalette from "./ui/ImageColorPalette"
import { urlFor } from "../utils/sanity-utils"

type Props = {
  image?: SanityImageAsset | any
  title: string
  industry?: string
  link: string
}

const CardMini = ({ link, image, title, industry }: Props) => {
  return (
    <article className={"item w-200"}>
      <Link href={link} className="relative block">
        {image && (
          <Image
            src={urlFor(image)}
            width={500}
            height={
              image.metadata.dimensions.width /
              image.metadata.dimensions.aspectRatio
            }
            alt={title || "project"}
            unoptimized
          />
        )}
        <div className="header text-center pt-1re text-sm ">
          <WorkTitle title={title || ""} subtitle={industry} />
        </div>
      </Link>
    </article>
  )
}

export default CardMini
