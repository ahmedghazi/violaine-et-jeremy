import { Project, SanityImageAsset, Space } from "@/app/types/schema"
import { urlFor } from "@/app/utils/sanity-utils"
import { _linkResolver } from "@/app/utils/utils"
import Image from "next/image"
import Link from "next/link"
import React, { useMemo, useState } from "react"

type Props = {
  input: Project | Space
}

const ListItem = ({ input }: Props) => {
  // const [isMobile, setIsMobile] = useState(false)
  const maxLen = 35
  const images = useMemo(() => {
    let arr: Array<SanityImageAsset> = []
    input.content?.forEach((el) => {
      el.items?.forEach((_el) => {
        if (_el._type === "compositionItemImage") {
          if (arr.length < maxLen && _el.image) {
            const image: SanityImageAsset | any = _el.image.asset
            arr.push(image)
          }
        }
      })
    })
    return arr
  }, [])

  return (
    <div className="project">
      <Link href={_linkResolver(input)}>
        <div className="tr flex">
          <div className="td col-year">{input.year}</div>
          <div className="td col-client hidden-sm">{input.client}</div>
          <h2 className="td col-project hidden-sm">{input.title}</h2>
          <h2 className="td col-client-project sm-only">{`${
            input.client ? `${input.client} ◆ ` : ""
          }${input.title}`}</h2>
          <div className="td col-industry">{input.industry}</div>
          <div className="td col-location">{input.location}</div>
          <div className="td col-link italic lowercase">
            {/* <Link href={_linkResolver(input)}>see more</Link> */}
            see more
          </div>
        </div>
        {images.length > 0 && (
          <div className="images flex flex-nowrap  justify-center gap-sm">
            {images.map((image, i) => (
              <figure key={i}>
                <Image
                  src={urlFor(
                    image.url,
                    Math.round(130 * image?.metadata?.dimensions.aspectRatio)
                  )}
                  width={130 * image?.metadata?.dimensions.aspectRatio}
                  height={130}
                  alt={input.title || "alt"}
                  sizes="100vw"
                  blurDataURL={image?.metadata?.lqip}
                  placeholder="blur"
                />
              </figure>
            ))}
          </div>
        )}
      </Link>
    </div>
  )
}

export default ListItem
