"use client"
import React, { useEffect, useRef } from "react"
import { Project, Space } from "../types/schema"
import HomeCard from "./HomeCard"

type Props = {
  input: Project[] | Space[]
}

type WinSize = {
  width: number
  height: number
}

const HomeFeed = ({ input }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    _onScroll()
    // _bindScrollSnap()
    // const abcjsInit = async () => {
    //   const createScrollSnap = (await import("scroll-snap")).default
    //   const element = ref.current
    //   createScrollSnap(
    //     element,
    //     {
    //       snapDestinationY: "90%",
    //       duration: 800,
    //     },
    //     () => console.log("snapped")
    //   )
    // }
    // abcjsInit()

    // const asyncLoad = async () => {
    //   const PanelSnap = (await import("panelsnap")).default
    //   const panelSnapInstance = new PanelSnap({
    //     container: document.body,
    //     panelSelector: "article.home-card",
    //     directionThreshold: 0,
    //     delay: 0,
    //     duration: 800,
    //     // easing: function(t) { return t },
    //   })
    //   panelSnapInstance.on("activatePanel", (panel: any) => {
    //     console.log(panel)
    //   })
    // }
    // asyncLoad()

    window.addEventListener("scroll", _onScroll)

    setTimeout(() => {
      document.querySelector(".spacer")?.classList.add("collapse")
    }, 600)

    return () => {
      window.removeEventListener("scroll", _onScroll)
    }
  }, [])

  const _onScroll = () => {
    if (!ref.current) return
    // const threshold = 180
    const threshold = 20
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
    <div className="feed " ref={ref}>
      {input.map((item, i: number) => (
        <HomeCard input={item} key={item.slug?.current} />
      ))}
    </div>
  )
}

export default HomeFeed
