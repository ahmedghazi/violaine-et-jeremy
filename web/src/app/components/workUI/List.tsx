import { Project, Space, WorksTextsItem } from "@/app/types/schema"
import { _linkResolver } from "@/app/utils/utils"
import Link from "next/link"
import React, { useEffect, useRef } from "react"
import ListItem from "./ListItem"
import clsx from "clsx"

type Props = {
  input: WorksTextsItem[]
}

const List = ({ input }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  // const thead = ["year", "client", "project", "industry", "location", "link"]

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
        const offset = 133
        const distanceToTop = bounding.top - offset
        if (distanceToTop < threshold) {
          scale = (100 - (distanceToTop * 100) / threshold) / 100
        }

        el.style.setProperty("--custom-max-height", `${130 * scale}px`)
        // el.style.setProperty("--custom-opacity", `${scale / 1}`)
        el.classList.toggle("can-display-images", scale > 0)
      })
    }
    ref.current?.style.setProperty("--opacity", "1")
  }

  return (
    <div className="list" ref={ref}>
      <div className="thead  sticky top-100 px-sm md:px-200 text-xs md:text-md ">
        <div className="tr flex">
          <div className="th col-year">YEAR</div>
          <div className="th col-client hidden-sm">CLIENT</div>
          <div className="th col-project hidden-sm">PROJECT</div>
          <div className="th col-client-project sm-only">CLIENT . PROJECT</div>
          <div className="th col-industry">INDUSTRY</div>
          <div className="th col-location">LOCATION</div>
          <div className="th col-link  lowercase"></div>
        </div>
      </div>
      <div className="tbody serif px-sm md:px-200 overflow-x-hidden text-sm md:text-md">
        {input &&
          input.length > 0 &&
          input?.map((item, i: number) => (
            <ListItem
              key={`${item.work?.slug?.current}-
              ${i}`}
              input={item.work}
              hasLink={item.hasLink}
            />
          ))}
      </div>
    </div>
  )
}

export default List
