"use client"
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function LenisProvider({
  children,
  options,
  ...props
}: {
  children: React.ReactNode
  options?: any
}) {
  ;``
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      if (pathname === "////") lenis.stop()
      else {
        lenis.start()
        // lenis.scrollTo(0, { immediate: true })
        const resize = setTimeout(() => {
          lenis.resize()
        }, 150)
      }
    }
  }, [pathname, lenis])

  return (
    <ReactLenis root {...props}>
      {children}
    </ReactLenis>
  )
}
