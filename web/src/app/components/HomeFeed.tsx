"use client"
import React, { useEffect, useRef } from "react"
import { Project } from "../types/schema"
import HomeCard from "./HomeCard"

type Props = {
  input: Project[]
}

const HomeFeed = ({ input }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    _onScroll()
    window.addEventListener("scroll", _onScroll)

    return () => {
      window.removeEventListener("scroll", _onScroll)
    }
  }, [])

  const _onScroll = () => {
    // console.log(window.scrollY)
    const threshold = 150
    const items = ref.current?.querySelectorAll<HTMLElement>(
      "article:has(.is-ready-to-animate)"
    )
    if (!items) return
    // console.log(typeof items)
    items?.forEach((el) => {
      let width = 0
      const bounding: DOMRect = el.getBoundingClientRect()
      const distanceToTop = bounding.top - threshold
      if (distanceToTop >= 0) {
        width = distanceToTop * 3
      }
      // console.log(width)

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
