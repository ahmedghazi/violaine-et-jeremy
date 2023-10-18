"use client"
import { useEffect } from "react"
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis"
import { usePathname } from "next/navigation"
import { subscribe, unsubscribe } from "pubsub-js"

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const lenis = useLenis(({ scroll, dimensions }: any) => {
    // called every scroll
    const thresholdBottom = dimensions.scrollHeight - dimensions.height * 2
    if (scroll > thresholdBottom) {
      lenis.resize()
    }
    // console.log(scroll, dimensions.scrollHeight)
  })

  useEffect(() => {
    const token = subscribe("WINDOW_RESIZE", (e) => {
      // console.log(e)
      if (lenis) {
        lenis.resize()
      }
    })

    return () => {
      unsubscribe(token)
    }
  }, [lenis])

  useEffect(() => {
    if (lenis) {
      const timer = setTimeout(() => {
        // console.log(lenis.dimensions.scrollHeight)
        lenis.start()
        lenis.resize()
      }, 150)
      const resizeAfterPageTransition = setTimeout(() => {
        lenis.resize()
        // console.log("resize", lenis.dimensions.scrollHeight)
      }, 300)
    }
  }, [pathname, lenis])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 0.8,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
