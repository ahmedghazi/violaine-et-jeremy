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
  // const [scope, animate] = useAnimate()
  // useEffect(() => {}, [])

  const duration: number = 0.4
  const violaine: string[] = "IOLAINE".split("")
  const jeremy: string[] = "ÉRÉMY".split("")

  const containeVariants = {
    start: {
      opacity: 1,
    },
    end: {
      opacity: 0,
      transition: {
        duration: duration,
        delay: duration / 2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  }
  const bgVariants = {
    start: {
      height: "100%",
    },
    end: {
      height: "50%",
      transition: {
        duration: duration,
        ease: "easeIn",
        // staggerChildren: 5,
      },
    },
  }
  const letterVariantsContainer = {
    hide: {
      // opacity: 0
    },
    show: {
      // opacity: 1,
      transition: {
        // when: "beforeChildren",
        // delayChildren: 0,
        staggerChildren: 5,
      },
    },
  }

  const letterVariants = {
    show: {
      width: "auto",
    },
    hide: {
      width: 0,
      // opacity: 0,
      transition: {
        duration: duration,
      },
      // transitionEnd: {
      //   display: "none",
      // },
    },
  }

  const _onAnimationComplete = (item: string) => {
    if (item === "Y") {
      console.log("_onAnimationComplete", item)
      setIsEnd(true)
    }
  }
  return (
    <motion.div
      variants={containeVariants}
      animate={isEnd && "end"}
      className="splash splash--sm fixed inset-0 bg-bg- z-50 text-lg"
    >
      <motion.div
        variants={bgVariants}
        animate={isEnd && "end"}
        className="absolute inset-0- w-full h-full top-1/2 -translate-y-1/2 bg-bg overflow-clip "
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
                initial="hide"
                animate={"show"}
                className="flex"
              >
                {violaine.map((item, i) => (
                  <motion.div
                    key={`${item}-${i}`}
                    variants={letterVariants}
                    initial="show"
                    animate="hide"
                    style={{ overflow: "clip" }}
                    onAnimationComplete={() => _onAnimationComplete(item)}
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
                initial="hide"
                animate={"show"}
                className="flex"
              >
                {jeremy.map((item, i) => (
                  <motion.div
                    key={`${item}-${i}`}
                    variants={letterVariants}
                    initial="show"
                    animate="hide"
                    style={{ overflow: "clip" }}
                    onAnimationComplete={() => _onAnimationComplete(item)}
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SplashLogo
