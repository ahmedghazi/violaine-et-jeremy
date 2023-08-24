"use client"
import React, { useEffect, useMemo, useRef, useState, WheelEvent } from "react"
import { Project, Space } from "../types/schema"
import HomeCard from "./HomeCard"
import { debounce } from "throttle-debounce"
import { SmoothScroll } from "./ui/SmoothScroll"
import SmoothSnap from "./ui/SmoothSnap"

type Props = {
  input: Project[] | Space[]
}

type WinSize = {
  width: number
  height: number
}

const HomeFeed = ({ input }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const indexRef = useRef<number>(0)
  // const [index, setIndex] = useState(0)
  const [y, setY] = useState<number>(0)

  useEffect(() => {
    _onScroll()
    window.addEventListener("scroll", _onScroll)
    // window.addEventListener("wheel", _onWheelThrottle)

    setTimeout(() => {
      document.querySelector(".spacer")?.classList.add("collapse")
    }, 600)

    return () => {
      window.removeEventListener("scroll", _onScroll)
      // window.removeEventListener("wheel", _onWheelThrottle)
    }
  }, [y])

  const _onWheelThrottle = debounce(
    300,
    (e) => {
      indexRef.current =
        e.deltaY > 0 ? indexRef.current + 1 : indexRef.current - 1
      // console.log(indexRef.current)

      const step: number =
        document.querySelector(".home-card")?.getBoundingClientRect().height +
          272 || 500
      const max = ref.current?.getBoundingClientRect().height
      let translateY = step * indexRef.current * -1
      console.log(translateY, step, max)
      if (translateY < step && translateY > max * -1)
        ref.current.style.transform = `translateY(${translateY}px)`
      requestAnimationFrame(tick)
    },
    { atBegin: true }
  )

  const time = {
    start: performance.now(),
    total: 2000,
  }

  function lerp(start: number, end: number, amt: number) {
    return (1 - amt) * start + amt * end
  }

  const tick = (now: any) => {
    _onScroll()
    requestAnimationFrame(tick)
  }

  const _onScroll = () => {
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

  return (
    <div style={fixedContainer}>
      <SmoothSnap parent=".page-home">
        <div className="feed " ref={ref}>
          {input.map((item, i: number) => (
            <HomeCard input={item} key={item.slug?.current} />
          ))}
        </div>
      </SmoothSnap>
    </div>
  )
}

export default HomeFeed

const fixedContainer: React.CSSProperties = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
}
