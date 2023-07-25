import React, { useEffect, useRef } from "react"
import { Project, SanityImageAsset } from "../types/schema"
import Image from "next/image"
import Link from "next/link"
import { _linkResolver } from "../utils/utils"
import WorkTitle from "./WorkTitle"
import clsx from "clsx"

type Props = {
  input: Project
  // isLast: boolean
}

const HomeCard = ({ input }: Props) => {
  const refArticle = useRef<HTMLDivElement>(null)
  const refIndustry = useRef<HTMLDivElement>(null)

  const imageHome: SanityImageAsset | any = input.imageHome?.asset as
    | SanityImageAsset
    | any

  useEffect(() => {
    const bounding: DOMRect | any = refIndustry.current?.getBoundingClientRect()
    if (refIndustry.current && refArticle.current) {
      // console.log(refIndustry.current)
      refArticle.current.dataset.minWidth = bounding.width
      refIndustry.current.style.setProperty(
        "--min-width",
        `${bounding.width}px`
      )
      refIndustry.current.classList.add("is-ready-to-animate")
    }
  }, [])

  const _splitText = () => {
    if (!input.industry) return ""
    const parts = input.industry.split("")
    return parts.map((item: string, i: number) => <span key={i}>{item}</span>)
  }

  return (
    <article className={clsx("home-card")} ref={refArticle}>
      <Link href={_linkResolver(input)}>
        <div className="industry text-sm md:text-lg text-center serif uppercase">
          <div
            className="inner flex justify-evenly  flex-nowrap whitespace-nowrap"
            ref={refIndustry}
          >
            {_splitText()}
          </div>
        </div>
        {imageHome && (
          <figure className="mb-sm md:mb-1e">
            <Image
              src={imageHome.url}
              width={imageHome?.metadata?.dimensions.width}
              height={imageHome?.metadata?.dimensions.height}
              alt={input.title || "alt"}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              blurDataURL={imageHome?.metadata?.lqip}
              placeholder="blur"
            />
          </figure>
        )}
        <div className="infos text-xs md:text-sm">
          <div className="header">
            <WorkTitle title={input.title || ""} subtitle={input.job} />
          </div>

          <p className="text-center italic-">{input.description}</p>
        </div>
      </Link>
    </article>
  )
}

export default HomeCard
