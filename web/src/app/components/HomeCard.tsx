import React, { useEffect, useRef } from "react"
import { Project, SanityImageAsset } from "../types/schema"
import Image from "next/image"

type Props = {
  input: Project
}

const HomeCard = ({ input }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const imageHome: SanityImageAsset | any = input.imageHome?.asset as
    | SanityImageAsset
    | any

  useEffect(() => {
    const bounding: DOMRect | any = ref.current?.getBoundingClientRect()
    if (ref.current) {
      console.log(ref.current)
      ref.current.style.setProperty("--min-width", `${bounding.width}px`)
      ref.current.classList.add("is-ready-to-animate")
    }
  }, [])

  const _splitText = () => {
    if (!input.industry) return ""
    const parts = input.industry.split("")
    return parts.map((item: string, i: number) => <span key={i}>{item}</span>)
  }

  return (
    <article className="home-card mb-100">
      <div className="industry text-lg text-center serif uppercase">
        <div
          className="inner flex justify-between flex-nowrap whitespace-nowrap"
          ref={ref}
        >
          {_splitText()}
        </div>
      </div>
      {imageHome && (
        <figure className="mb-1e">
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
      <div className="header  text-sm">
        <div className="flex justify-center">
          <h2 className="">{input.title}</h2>{" "}
          <span className="sep-dash">—</span>
          <em className="serif">{input.job}</em>
        </div>

        <p className="text-center italic">{input.description}</p>
      </div>
    </article>
  )
}

export default HomeCard
