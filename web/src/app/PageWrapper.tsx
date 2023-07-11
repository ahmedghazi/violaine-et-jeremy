// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { usePathname } from "next/navigation"
// import { ReactNode } from "react"

// interface PageContextProps {
//   location?: {
//     pathname: string
//   }
//   children: ReactNode
// }

// const duration = 0.8

// const variants = {
//   initial: {
//     opacity: 0,
//     // y: "0",
//   },
//   enter: {
//     opacity: 1,
//     // y: " 0",
//     transition: {
//       duration: duration,
//       // delay: duration * 2,
//       // when: "beforeChildren",
//       ease: [0.775, 0, 0.17, 1.005],
//     },
//   },
//   exit: {
//     opacity: 0,
//     // y: "200",
//     transition: {
//       duration: duration,
//       ease: [0.775, 0, 0.17, 1.005],
//       // delay: duration,
//       // when: "beforeChildren",
//     },
//   },
// }

// export const PageWrapper = ({ children }: PageContextProps) => {
//   const pathname = usePathname()
//   return (
//     <>
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.div
//           key={pathname}
//           // initial={{ opacity: 0 }}
//           // animate={{ opacity: 1 }}
//           // exit={{ opacity: 0 }}
//           // transition={{
//           //   duration: duration,
//           //   when: "beforeChildren",
//           //   ease: [0.775, 0, 0.17, 1.005],
//           // }}
//           variants={variants}
//           initial="initial"
//           animate="enter"
//           exit="exit"
//         >
//           {children}
//         </motion.div>
//       </AnimatePresence>
//     </>
//   )
// }
