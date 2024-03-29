import React, { useEffect, useMemo, useState } from "react"
import { Project, SanityImageAsset, Space } from "@/app/types/schema"
import { urlFor } from "@/app/utils/sanity-utils"
import { _linkResolver } from "@/app/utils/utils"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { publish } from "pubsub-js"

type Props = {
  input?: Project | Space | any | undefined
  hasLink?: boolean
}

const ListItem = ({ input, hasLink }: Props) => {
  // const [isMobile, setIsMobile] = useState(false)
  const [active, setActive] = useState<boolean>(false)
  const maxLen = input.imagesLength || 15

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

  useEffect(() => {
    // console.log(active)
    if (active) {
      // after slideDown animation
      setTimeout(() => {
        publish("WINDOW_RESIZE")
      }, 300)
    }
  }, [active])

  // useEffect(() => {
  //   setTimeout(() => {
  //     const trs = document.querySelectorAll(".tr.project > .btn")
  //     console.log(trs)
  //     trs.forEach((el: HTMLElement | any) => el.click())
  //   }, 150)
  // }, [])

  return (
    <div className={clsx("tr project", hasLink ? "has-link" : "no-link")}>
      <div
        className="flex pb-xs btn"
        onClick={() => setActive(!active)}
        // onMouseEnter={() => setActive(true)}
        // onMouseLeave={() => setActive(false)}
      >
        <div className="td col-year">{input.year}</div>
        <div className="td col-client hidden-sm">{input.client}</div>
        <h2 className="td col-project hidden-sm ellipsis">{input.title}</h2>
        <h2 className="td col-client-project sm-only ellipsis">{`${
          input.client ? `${input.client} . ` : ""
        }${input.title}`}</h2>
        <div className="td col-industry">{input.industry}</div>
        <div className="td col-location ellipsis">{input.location}</div>
      </div>
      {hasLink && (
        <div className="td--- col-link italic lowercase absolute top-0 right-0">
          <Link href={hasLink ? _linkResolver(input) : "#"}>see more</Link>
        </div>
      )}

      {images.length > 0 && (
        <div
          className={clsx(
            "images flex flex-nowrap justify-center gap-sm hide-sb",
            active ? "is-active" : ""
          )}
          onClick={() => setActive(false)}
          // onMouseEnter={() => setActive(true)}
        >
          {images.map((image, i) => (
            <figure key={i}>
              <Image
                src={urlFor(
                  image.url,
                  Math.round(260 * image?.metadata?.dimensions.aspectRatio)
                )}
                width={260 * image?.metadata?.dimensions.aspectRatio}
                height={260}
                alt={input.title || "alt"}
                sizes="100vw"
                blurDataURL={image?.metadata?.lqip}
                placeholder="blur"
                unoptimized
              />
            </figure>
          ))}
        </div>
      )}

      <div className="sm-only list-item--actions">
        <div className="flex justify-between">
          <button
            className="btn-toggle-images sm-only"
            onClick={() => setActive(!active)}
          >
            {active ? (
              <svg
                version="1.1"
                id="Calque_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15px"
                viewBox="0 0 340.9 53"
              >
                <rect width="142.1" height="53" />
                <rect x="198.8" width="142.1" height="53" />
              </svg>
            ) : (
              <svg
                version="1.1"
                id="Calque_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15px"
                viewBox="0 0 340.9 337.3"
              >
                <path
                  d="M0,142.1h142.1v53H0V142.1z M198.8,0v142.1h-56.6V0H198.8z M142.1,337.3V195.2h56.6v142.1H142.1z M340.9,142.1v53H198.8
		v-53H340.9z"
                />
              </svg>
            )}
          </button>
          {hasLink && active && (
            <Link href={hasLink ? _linkResolver(input) : "#"}>
              <div className=" italic lowercase">see more</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListItem
