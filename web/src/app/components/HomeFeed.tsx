"use client"
import React, { useEffect, useRef } from "react"
import { Project, Space } from "../types/schema"
import HomeCard from "./HomeCard"

type Props = {
  input: Project[] | Space[]
}

const HomeFeed = ({ input }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    _onScroll()
    window.addEventListener("scroll", _onScroll)
    document.querySelector(".page-home")?.classList.add("reveal")
    setTimeout(() => {
      document.documentElement.classList.add("can-snap")
    }, 1600)
    return () => {
      window.removeEventListener("scroll", _onScroll)
    }
  }, [])

  const _onScroll = () => {
    // console.log(window.scrollY)
    // const threshold = 150
    if (!ref.current) return
    // const threshold = 160
    const threshold = 180
    const items = ref.current?.querySelectorAll<HTMLElement>(
      "article:has(.is-ready-to-animate)"
    )
    if (!items) return
    // console.log(typeof items)
    items?.forEach((el) => {
      let width: number = 0
      const minWidth: number = Number(el.dataset.minWidth) || 0
      const bounding: DOMRect = el.getBoundingClientRect()
      const distanceToTop: number = bounding.top - threshold
      if (distanceToTop >= 0) {
        width = distanceToTop * 5 + minWidth
      }
      // console.log(distanceToTop, minWidth)

      el.style.setProperty("--width", `${width}px`)
      el.classList.add("can-display-images")
    })
  }

  return (
    <div className="feed " ref={ref}>
      {input.map((item, i: number) => (
        <HomeCard input={item} key={item.slug?.current} />
      ))}
    </div>
  )
}

export default HomeFeed
