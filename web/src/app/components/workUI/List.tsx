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
    const rows: HTMLDivElement[] | any =
      ref.current?.querySelectorAll(".project .images")
    if (rows) {
      rows.forEach((el: HTMLDivElement) => {
        let scale = 0
        const bounding: DOMRect = el.getBoundingClientRect()
        const offset = 100
        const variable = bounding.top * 0.1
        const distanceToTop = bounding.top - offset
        // console.log(bounding.top)
        if (distanceToTop < threshold) {
          scale = (100 - (distanceToTop * 100) / threshold) / 100
        }

        el.style.setProperty("--custom-max-height", `${130 * scale}px`)
        el.classList.toggle("can-display-images", scale > 0)
      })
    }
    ref.current?.style.setProperty("--opacity", "1")
  }

  return (
    <div className="list  overflow-x-hidden-" ref={ref}>
      <div className="thead grid md:grid-cols-6 sticky top-100 px-200">
        {thead.map((th: string, i: number) => (
          <div key={i} className="th uppercase">
            {th}
          </div>
        ))}
      </div>
      <div className="tbody serif px-200 overflow-x-hidden">
        {input &&
          input.length > 0 &&
          input?.map((item, i: number) => (
            <ListItem key={item.slug?.current} input={item} />
          ))}
        {/* <ListItem key={input[0].slug?.current} input={input[0]} /> */}
      </div>
    </div>
  )
}

export default List
