import { Project, SanityImageAsset, Space } from "@/app/types/schema"
import { urlFor } from "@/app/utils/sanity-utils"
import { _linkResolver } from "@/app/utils/utils"
import Image from "next/image"
import Link from "next/link"
import React, { useMemo } from "react"

type Props = {
  input: Project | Space
}

const ListItem = ({ input }: Props) => {
  const maxLen = 35
  //
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
    <div className="project  ">
      <div className="td grid md:grid-cols-6">
        <div>{input.year}</div>
        <div>{input.client}</div>
        <h2>{input.title}</h2>
        <div>{input.industry}</div>
        <div>{input.location}</div>
        <div className="link italic lowercase">
          <Link href={_linkResolver(input)}>see more</Link>
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
    </div>
  )
}

export default ListItem