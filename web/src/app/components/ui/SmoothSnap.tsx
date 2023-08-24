import React, { ReactNode, useEffect, useRef, useState } from "react"
import { MathUtils } from "@/app/utils/utils"
import { debounce } from "throttle-debounce"

interface Props {
  children: ReactNode
  parent: string
}

const initialTranlationY = {
  previous: 0,
  current: 0,
  ease: 0.2,
}

type Scroll = {
  doc: number
  last: number
  speed: number
}

const SmoothSnap = ({ children, parent }: Props) => {
  const scrollableRef = useRef<HTMLDivElement>(null)
  const [translationY, setTranlationY] = useState(initialTranlationY)
  const requestRef = useRef<number>()
  const indexRef = useRef<number>(0)
  const scrollRef = useRef<Scroll>({
    doc: 0,
    last: 0,
    speed: 0,
  })
  useEffect(() => {
    setSize()
    update()
  }, [])

  useEffect(() => {
    window.addEventListener("wheel", _onWheelThrottle)
    // requestRef.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener("wheel", _onWheelThrottle)
      // cancelAnimationFrame(requestRef.current)
    }
  }, [])

  const _onWheelThrottle = debounce(
    300,
    (e) => {
      indexRef.current =
        e.deltaY > 0 ? indexRef.current + 1 : indexRef.current - 1
      console.log(indexRef.current)
      const homeCard = document.querySelector(".home-card")
      if (homeCard) {
        const step: number =
          homeCard?.getBoundingClientRect().height + 272 || 500
        console.log(step)
        setTranlationY((state) => ({
          ...state,
          // current: scrollRef.current.doc,
          previous: step * indexRef.current * 1,
        }))
      }
    },
    { atBegin: true }
  )

  const update = () => {
    setTranlationY((state) => ({
      ...state,
      // current: scrollRef.current.doc,
      // previous: scrollRef.current.doc,
    }))
  }

  const setSize = (): void => {
    // document.body.style.height = `${scrollableRef.current.scrollHeight}px`
    const parentNode: HTMLDivElement | any = document.querySelector(parent)
    if (!parentNode) return
    parentNode.style.height = `${scrollableRef.current?.scrollHeight}px`
  }

  return (
    <div
      ref={scrollableRef}
      style={{
        transform: `translate3d(0, ${-1 * translationY.previous}px, 0)`,
      }}
    >
      {children}
    </div>
  )
}

export default SmoothSnap
