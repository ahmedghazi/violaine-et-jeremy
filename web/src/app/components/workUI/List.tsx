import { Project, Space } from "@/app/types/schema"
import { _linkResolver } from "@/app/utils/utils"
import Link from "next/link"
import React, { useEffect, useRef } from "react"
import ListItem from "./ListItem"

type Props = {
  input: (Project | Space)[]
}

const List = ({ input }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const thead = ["year", "client", "project", "industry", "location", ""]

  useEffect(() => {
    _onScroll()
    window.addEventListener("scroll", _onScroll)

    return () => {
      window.removeEventListener("scroll", _onScroll)
    }
  }, [])

  const _onScroll = () => {
    // const sy: number = window.scrollY
    const threshold: number = (window.innerHeight / 4) * 3
    // console.log(sy)
    const rows = ref.current?.querySelectorAll(".project")
    if (rows) {
      rows.forEach((el) => {
        let scale = 0
        const bounding: DOMRect = el.getBoundingClientRect()
        const distanceToTop = bounding.top
        if (distanceToTop < threshold) {
          scale = (100 - (distanceToTop * 100) / threshold) / 100
          // console.log(distanceToTopPerc)
          // scale = distanceToTopPerc
        }

        const images: HTMLDivElement = el.querySelector(
          ".images"
        ) as HTMLDivElement
        if (images) {
          images.style.setProperty("--custom-max-height", `${130 * scale}px`)
          images.style.setProperty("--opacity", "1")
        }
      })
    }
  }

  return (
    <div className="list px-100 overflow-x-hidden" ref={ref}>
      <div className="thead grid md:grid-cols-6 ">
        {thead.map((th: string, i: number) => (
          <div key={i} className="th uppercase">
            {th}
          </div>
        ))}
      </div>
      <div className="tbody serif">
        {input &&
          input.length > 0 &&
          input?.map((item, i: number) => (
            <ListItem key={item.slug?.current} input={item} />
          ))}
        {input &&
          input.length > 0 &&
          input?.map((item, i: number) => (
            <ListItem key={item.slug?.current} input={item} />
          ))}
        {input &&
          input.length > 0 &&
          input?.map((item, i: number) => (
            <ListItem key={item.slug?.current} input={item} />
          ))}
      </div>
    </div>
  )
}

export default List
