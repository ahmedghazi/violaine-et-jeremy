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
  // const refIndex = useRef<number>(0)
  // const [index, setIndex] = useState<number>(0)

  // const settings: any = {
  //   index: 0,
  //   lastTimestamp: 0,
  //   canScroll: true,
  //   lastWheelDelta: 0,
  // }

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
    // const controller = new AbortController()
    // window.addEventListener(
    //   "wheel",
    //   (e) => {
    //     e.preventDefault()
    //     debouncedWheel(e)
    //   },
    //   { passive: false, signal: controller.signal }
    // )

    window.addEventListener("scroll", _onScroll)

    setTimeout(() => {
      document.querySelector(".spacer")?.classList.add("collapse")
    }, 600)

    return () => {
      window.removeEventListener("scroll", _onScroll)
      // controller.abort()
    }
  }, [])

  // const debouncedWheel = debounce(
  //   100,
  //   (event) => {
  //     event.preventDefault()
  //     console.log(settings)

  //     var domEvent = event
  //     var delta = domEvent.deltaY
  //     var wheelDelta = domEvent.wheelDeltaY
  //     var timeDelta = Date.now() - settings.lastTimestamp
  //     settings.lastTimestamp = Date.now()
  //     var wheelDeltaDelta = Math.abs(
  //       Math.abs(wheelDelta) - Math.abs(settings.lastWheelDelta)
  //     )
  //     // console.log(wheelDelta, timeDelta, wheelDeltaDelta)
  //     if (wheelDeltaDelta > 10) {
  //       settings.lastTimestamp = 0
  //     }
  //     settings.lastWheelDelta = wheelDelta

  //     if (settings.canScroll && timeDelta > 100) {
  //       if (delta > 1) {
  //         // scroll verso basso
  //         settings.index += 1
  //         if (settings.index >= input.length - 1)
  //           settings.index = input.length - 1
  //       } else if (delta < -1) {
  //         // scroll verso l'alto
  //         settings.index -= 1
  //         if (settings.index <= 0) settings.index = 0
  //       }

  //       // slideTo(slider.index)
  //       console.log(settings.index)
  //     }

  //     // const delta = Math.sign(arg.deltaY)
  //     // refIndex.current = delta > 0 ? refIndex.current + 1 : refIndex.current - 1
  //     // if (refIndex.current < 1) refIndex.current = 1

  //     const activeItem = ref.current?.querySelector(
  //       `.home-card:nth-child(${settings.index})`
  //     )
  //     if (activeItem) {
  //       smoothScrollToElement(activeItem, {
  //         duration: 1000,
  //         easingFunction: EASING_FUNCTIONS.slowInSlowOut,
  //         offsetTop: 0,
  //         offsetLeft: 0,
  //       })
  //     }
  //   },
  //   { atBegin: true }
  // )

  // const _onWheel = (e: WheelEvent) => {
  //   const delta = Math.sign(e.deltaY)
  //   // console.info(delta)
  //   const nextIndex = delta > 0 ? index + 1 : index - 1
  //   console.log(nextIndex)
  // }
  // const _updateIndex = (e) => {

  // }
  const _onScroll = () => {
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

  return (
    <div className="feed " ref={ref}>
      {input.map((item, i: number) => (
        <HomeCard input={item} key={item.slug?.current} />
      ))}
    </div>
  )
}

export default HomeFeed
