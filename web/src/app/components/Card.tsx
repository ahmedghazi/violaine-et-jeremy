"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Project, SanityImageAsset, Space } from "../types/schema"
import Link from "next/link"
import { _linkResolver } from "../utils/utils"
import WorkTitle from "./WorkTitle"
// import ImageColorPalette from "./ui/ImageColorPalette"
import ColorPalette from "./ui/ColorPalette"
import clsx from "clsx"

type Props = {
  image?: SanityImageAsset | any
  title: string
  industry?: string
  link: string
  colorPalette?: any[] | null
}

const Card = ({ link, image, title, industry, colorPalette }: Props) => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <article
      className={clsx("card", hover ? "is-hover" : "")}
      // onMouseEnter={() => setHover(!hover)}
      // onMouseLeave={() => setHover(false)}
    >
      <Link
        href={link}
        className="relative"
        onMouseEnter={() => setHover(!hover)}
      >
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

                {colorPalette && (
                  <div className="absolute top-0 left-0 w-full">
                    <ColorPalette input={colorPalette} />
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
