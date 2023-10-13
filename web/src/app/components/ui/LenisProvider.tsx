"use client"
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { subscribe, unsubscribe } from "pubsub-js"

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    const token = subscribe("WINDOW_RESIZE", (e) => {
      console.log(e)
      console.log(lenis)
      if (lenis) {
        lenis.resize()
      }
    })

    return () => {
      unsubscribe(token)
    }
  }, [])

  useEffect(() => {
    if (lenis) {
      // if (pathname === "////") lenis.stop()
      // else {
      //   lenis.start()
      //   // lenis.scrollTo(0, { immediate: true })
      //   const resize = setTimeout(() => {
      //     lenis.resize()
      //   }, 150)
      // }
      lenis.start()
      const resize = setTimeout(() => {
        lenis.resize()
      }, 150)
      const resizeAfterPageTransition = setTimeout(() => {
        lenis.resize()
      }, 250)
    }
  }, [pathname, lenis])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 0.6,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
