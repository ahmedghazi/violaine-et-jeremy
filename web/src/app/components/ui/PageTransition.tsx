"use client"
import React, { ReactNode, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
// import { useMemo } from "react"

const duration = 0.6

const variants = {
  initial: {
    opacity: 0,
    // y: '100%',
    // y: "0",
  },
  enter: {
    opacity: 1,
    // y: " 0",
    // transition: {
    //   duration: duration,
    //   // delay: duration * 2,
    //   // when: "beforeChildren",
    //   // ease: [0.775, 0, 0.17, 1.005],
    // },
  },
  exit: {
    opacity: 0,
    // y: "200",
    // transition: {
    //   duration: duration,
    //   // delay: duration,
    //   // when: 'beforeChildren',
    // },
  },
}

interface PageContextProps {
  location?: {
    pathname: string
  }
  children: ReactNode
}

const PageTransition = ({ location, children }: PageContextProps) => {
  const pathName = usePathname()
  // // console.log(pathName)
  // useEffect(() => {
  //   window.scroll(0, 0)
  // }, [])

  // useEffect(() => {
  //   console.log({ pathName })

  //   document.documentElement.classList.remove("can-snap")
  //   document.documentElement.classList.toggle("is-home", pathName === "/")
  // }, [pathName])

  return (
    <AnimatePresence>
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        className="page-transition"
        key={pathName}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{
          duration: duration,
          // when: "beforeChildren",
          // ease: [0.775, 0, 0.17, 1.005],
        }}
        // onAnimationComplete={_onAnimationComplete}
      >
        {children}
      </motion.div>
      {/* {pathName === "/" && <SplashLogo />} */}
    </AnimatePresence>
  )
}

export default PageTransition
