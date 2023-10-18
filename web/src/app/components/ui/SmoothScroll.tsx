// import React, { useRef, useEffect, useState, ReactNode } from "react"
// // import { images } from "./data";

// // import { Item } from "./Item";

// import { MathUtils } from "@/app/utils/utils"

// const initialTranlationY = {
//   previous: 0,
//   current: 0,
//   ease: 0.2,
// }

// interface Props {
//   children: ReactNode
// }

// type Scroll = {
//   doc: number
//   last: number
//   speed: number
// }

// const SmoothScroll = ({ children }: Props): JSX.Element => {
//   const scrollableRef = useRef<HTMLDivElement>(null)

//   const scrollRef = useRef<Scroll>({
//     doc: 0,
//     last: 0,
//     speed: 0,
//   })

//   const requestRef = useRef<number>()

//   const [translationY, setTranlationY] = useState(initialTranlationY)

//   useEffect(() => {
//     setSize()
//     update()
//   }, [])

//   useEffect(() => {
//     window.addEventListener("scroll", setDocScroll)

//     return () => {
//       window.removeEventListener("scroll", setDocScroll)
//     }
//   }, [])

//   useEffect(() => {
//     const animate = () => {
//       const scroll = scrollRef.current
//       scroll.speed = Math.abs(scroll.doc - scroll.last)
//       scroll.last = scroll.doc

//       const { previous, ease } = translationY

//       const curr = scroll.doc

//       setTranlationY((state) => {
//         return {
//           ...state,
//           current: curr,
//           previous: MathUtils.lerp(previous, curr, ease),
//         }
//       })

//       requestRef.current = requestAnimationFrame(animate)
//     }

//     requestRef.current = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(requestRef.current)
//   }, [translationY])

//   const update = () => {
//     setTranlationY((state) => ({
//       ...state,
//       current: scrollRef.current.doc,
//       previous: scrollRef.current.doc,
//     }))
//   }

//   const setSize = (): void => {
//     // document.body.style.height = `${scrollableRef.current.scrollHeight}px`
//     document.querySelector(
//       ".page-home"
//     ).style.height = `${scrollableRef.current.scrollHeight}px`
//   }

//   const setDocScroll = (): void => {
//     scrollRef.current.doc =
//       window.pageYOffset || document.documentElement.scrollTop
//   }

//   return (
//     <div
//       ref={scrollableRef}
//       style={{
//         transform: `translate3d(0, ${-1 * translationY.previous}px, 0)`,
//       }}
//     >
//       <div>{children}</div>
//     </div>
//   )
// }

// export { SmoothScroll }
