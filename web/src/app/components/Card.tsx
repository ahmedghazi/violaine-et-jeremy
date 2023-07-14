import React from "react"
import Image from "next/image"
import { Project, SanityImageAsset, Space } from "../types/schema"
import Link from "next/link"
import { _linkResolver } from "../utils/utils"
import WorkTitle from "./WorkTitle"
import ImageColorPalette from "./ui/ImageColorPalette"

type Props = {
  image?: SanityImageAsset | any
  title: string
  industry?: string
  link: string
  withColorPalette: boolean
}

const Card = ({ link, image, title, industry, withColorPalette }: Props) => {
  return (
    <article className="card">
      <Link href={link} className="relative">
        {
          (image &&= (
            <figure className="relative">
              <Image
                src={image.url}
                width={image?.metadata?.dimensions.width}
                height={image?.metadata?.dimensions.height}
                alt={title || "alt"}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                blurDataURL={image?.metadata?.lqip}
                placeholder="blur"
              />
              <div className="overlay absolute inset-0 center-x-y">
                <div
                  className="bg-blurred"
                  style={{
                    backgroundColor:
                      image.metadata.palette.lightVibrant.background,
                  }}
                ></div>
                <div
                  className="text-sm md:text-lg"
                  style={{
                    color: image.metadata.palette.darkVibrant.background,
                  }}
                >
                  <WorkTitle title={title || ""} subtitle={industry} />
                </div>

                {withColorPalette && (
                  <div className="absolute top-0 left-0 w-full">
                    <ImageColorPalette image={image} />
                  </div>
                )}
              </div>
            </figure>
          ))
        }
        <div className="header text-sm">
          <WorkTitle title={title || ""} subtitle={industry} />
        </div>
      </Link>
    </article>
  )
}

export default Card
