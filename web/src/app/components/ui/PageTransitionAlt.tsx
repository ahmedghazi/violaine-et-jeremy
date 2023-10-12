"use client"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { PropsWithChildren, useRef, useContext, ReactNode } from "react"

import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context"

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  )
}

// Client wraps any client/rsc components with AnimatePresence
export default function PageTransitionAlt({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const doYourThing = () => {}
  return (
    <AnimatePresence mode="wait" onExitComplete={doYourThing}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2, type: "tween" }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  )
}
