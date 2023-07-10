import React, { useMemo } from "react"
import { Project, SanityImageAsset, Space } from "@/app/types/schema"
import { urlFor } from "@/app/utils/sanity-utils"
import { _linkResolver } from "@/app/utils/utils"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

type Props = {
  input?: Project | Space | any | undefined
  hasLink?: boolean
}

const ListItem = ({ input, hasLink }: Props) => {
  // const [isMobile, setIsMobile] = useState(false)
  const maxLen = 15
  const images = useMemo(() => {
    let arr: Array<SanityImageAsset> = []
    input.content?.forEach((el: any) => {
      el.items?.forEach((_el: any) => {
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
    <div className="tr project">
      <Link
        href={hasLink ? _linkResolver(input) : "#"}
        className={clsx(hasLink ? "" : "pointer-events-none")}
      >
        <div className="flex pb-xs">
          <div className="td col-year">{input.year}</div>
          <div className="td col-client hidden-sm">{input.client}</div>
          <h2 className="td col-project hidden-sm">{input.title}</h2>
          <h2 className="td col-client-project sm-only">{`${
            input.client ? `${input.client} ◆ ` : ""
          }${input.title}`}</h2>
          <div className="td col-industry">{input.industry}</div>
          <div className="td col-location">{input.location}</div>
          {hasLink && (
            <div className="td col-link italic lowercase">see more</div>
          )}
        </div>
        {images.length > 0 && (
          <div className="images flex flex-nowrap justify-center gap-sm">
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
