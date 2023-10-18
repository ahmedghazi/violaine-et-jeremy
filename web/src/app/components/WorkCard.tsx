import React from "react"
import Image from "next/image"
import { Project, SanityImageAsset, Space } from "../types/schema"
import Link from "next/link"
import { _linkResolver } from "../utils/utils"

type Props = {
  input: Project | Space
}

const WorkCard = ({ input }: Props) => {
  const imageCover: SanityImageAsset | any = input.imageCover?.asset as
    | SanityImageAsset
    | any
  return (
    <article className="work-card">
      <Link href={_linkResolver(input)}>
        {imageCover && (
          <figure>
            <Image
              src={imageCover.url}
              width={imageCover?.metadata?.dimensions.width}
              height={imageCover?.metadata?.dimensions.height}
              alt={input.title || "alt"}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              blurDataURL={imageCover?.metadata?.lqip} //automatically provided
              placeholder="blur" // Optional blur-up while loading
              unoptimized
            />
          </figure>
        )}
        <div className="header  flex justify-center text-sm">
          <h2 className="">{input.title}</h2>{" "}
          <span className="sep-dash">—</span>
          <em className="serif">{input.industry}</em>
        </div>
      </Link>
    </article>
  )
}

export default WorkCard
