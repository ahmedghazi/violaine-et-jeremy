"use client"
import React, { useEffect, useRef, useState } from "react"
import { Project, Space } from "../types/schema"
import HomeCard from "./HomeCard"
// import { debounce } from "throttle-debounce"
// import scrollTo from "../utils/scrollTo"
// import {
//   smoothScrollToElement,
//   EASING_FUNCTIONS,
// } from "../utils/sliding-scroll.min.js"
type Props = {
  input: Project[] | Space[]
}

// type WinSize = {
//   width: number
//   height: number
// }

const HomeFeed = ({ input }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    _onScroll()

    window.addEventListener("scroll", _onScroll)

    setTimeout(() => {
      document.querySelector(".spacer")?.classList.add("collapse")
    }, 600)

    return () => {
      window.removeEventListener("scroll", _onScroll)
      // controller.abort()
    }
  }, [])

  const _onScroll = () => {
    _handleLetterSpacing()
    _handleLastItem()
  }

  const _handleLetterSpacing = () => {
    // console.log(window.scrollY)
    if (!ref.current) return
    // const threshold = 180
    // const threshold = 20
    const threshold = 200
    const items = ref.current?.querySelectorAll<HTMLElement>(
      "article:has(.is-ready-to-animate)"
    )
    if (!items) return
    // console.log(typeof items)
    items?.forEach((el) => {
      let width: number = 0
      const minWidth: number = Number(el.dataset.minWidth) || 0
      const bounding: DOMRect = el.getBoundingClientRect()
      // console.log(bounding)
      const distanceToTop: number = bounding.top - threshold
      if (distanceToTop >= 0) {
        width = distanceToTop * 5 + minWidth
      }
      // console.log(distanceToTop, minWidth)

      el.style.setProperty("--width", `${width}px`)
      el.classList.add("can-display-images")
    })
  }

  const _handleLastItem = () => {
    const last: HTMLElement | any = document.querySelector(
      ".home-card:last-child"
    )
    if (!last) return

    const bounding: DOMRect | any = last?.getBoundingClientRect()
    console.log(bounding.y, bounding.y <= 0)

    const industry: HTMLElement | any = last?.querySelector(".industry")
    const opacity = (100 + (bounding.y * 100) / 100) / 100
    industry.style.opacity = opacity <= 0 ? 0 : 1

    last?.classList.toggle("is-above-fold", bounding.y <= 0)
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
