import React from "react"
import Image from "next/image"
import { Project, SanityImageAsset, Space } from "../types/schema"
import Link from "next/link"
import { _linkResolver } from "../utils/utils"
import WorkTitle from "./WorkTitle"

type Props = {
  image?: SanityImageAsset | any
  title: string
  industry?: string
  link: string
}

const Card = ({ link, image, title, industry }: Props) => {
  return (
    <article className="card">
      {/* <pre className="absolute z-50">{JSON.stringify(image, null, 2)}</pre> */}
      <Link href={link}>
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
                blurDataURL={image?.metadata?.lqip} //automatically provided
                placeholder="blur" // Optional blur-up while loading
              />
              <div
                className="overlay absolute inset-0 center-x-y"
                style={{
                  // backgroundColor:
                  //   image.metadata.palette.lightVibrant.background,
                  color: image.metadata.palette.muted.background,
                }}
              >
                <div
                  className="bg-blurred"
                  style={{
                    backgroundColor:
                      image.metadata.palette.lightVibrant.background,
                  }}
                ></div>
                <div className=" text-lg">
                  {/* <div className="h2">{title}</div>{" "}
                  <span className="sep-dash">—</span>
                  <em className="serif">{industry}</em> */}

                  <WorkTitle title={title || ""} subtitle={industry} />
                </div>
              </div>
            </figure>
          ))
        }
        <div className="header   text-sm">
          {/* <h2 className="">{title}</h2> <span className="sep-dash">—</span>
          <em className="serif">{industry}</em> */}
          <WorkTitle title={title || ""} subtitle={industry} />
        </div>
      </Link>
    </article>
  )
}

export default Card
