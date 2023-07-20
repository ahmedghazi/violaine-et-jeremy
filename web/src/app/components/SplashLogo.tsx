"use client"
import React, { useEffect, useState } from "react"
import { motion, useAnimate } from "framer-motion"
import { styled } from "styled-components"
type Props = {}

const Container = styled.div`
  .person div {
    overflow: hidden;
  }
`

const SplashLogo = (props: Props) => {
  const [isEnd, setIsEnd] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const duration: number = 0.4
  const violaine: string[] = "IOLAINE".split("")
  const jeremy: string[] = "ÉRÉMY".split("")

  const containeVariants = {
    show: {
      height: "100vh",
    },
    hidden: {
      height: "0vh",
      transition: {
        duration: duration,
        // delay: duration * 3,
        ease: "easeOut",
      },
      transitionEnd: {
        // display: "none",
      },
    },
  }
  // const bgVariants = {
  //   start: {
  //     height: "100%",
  //   },
  //   end: {
  //     height: "0%",
  //     transition: {
  //       duration: duration * 3,
  //       ease: "easeOut",
  //     },
  //     transitionEnd: {
  //       // display: "none",
  //     },
  //   },
  // }
  const letterVariantsContainer = {
    hidden: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    show: {
      opacity: 1,
    },
  }

  const letterVariants = {
    show: {
      width: "auto",
    },
    hidden: {
      width: 0,
      transitionEnd: {
        display: "none",
      },
    },
  }

  const _onAnimationComplete = () => {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    if (count === violaine.length + jeremy.length) {
      console.log("anime end")
      setIsEnd(true)
    }
  }, [count])

  return (
    <motion.div
      variants={containeVariants}
      initial="show"
      animate={isEnd && "hidden"}
      className="splash splash--sm fixed inset-0 top-1/2 -translate-y-1/2 w-full bg-bg z-50 text-lg overflow-clip"
    >
      <div className="center-x-y outter h-full">
        <div className="inner flex">
          <div
            className="person absolute  text-right flex"
            style={{ right: "0.7em" }}
          >
            <div>V</div>
            <motion.div
              variants={letterVariantsContainer}
              initial="show"
              animate="hidden"
              className="flex"
            >
              {violaine.map((item, i) => (
                <motion.div
                  key={`${item}-${i}`}
                  variants={letterVariants}
                  style={{ overflow: "clip" }}
                  onAnimationComplete={() => _onAnimationComplete()}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div>&</div>
          <div
            className="person absolute left-1e flex"
            style={{ left: "0.7em" }}
          >
            <div>J</div>
            <motion.div
              variants={letterVariantsContainer}
              initial="show"
              animate="hidden"
              className="flex"
            >
              {jeremy.map((item, i) => (
                <motion.div
                  key={`${item}-${i}`}
                  variants={letterVariants}
                  style={{ overflow: "clip" }}
                  onAnimationComplete={() => _onAnimationComplete()}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SplashLogo
