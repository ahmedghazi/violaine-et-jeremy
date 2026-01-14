"use client"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"

export default function PageTransitionAlt({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState("animate")

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage("exit")
    }
  }, [children, displayChildren])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2, type: "tween" }}
        onAnimationComplete={() => {
          if (transitionStage === "exit") {
            setDisplayChildren(children)
            setTransitionStage("animate")
          }
        }}
      >
        {displayChildren}
      </motion.div>
    </AnimatePresence>
  )
}
