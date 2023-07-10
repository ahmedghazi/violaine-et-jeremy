// "use client"
// import React, { ReactNode } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { usePathname } from "next/navigation"
// // import { useMemo } from "react"

// const duration = 0.4

// const variants = {
//   initial: {
//     opacity: 0,
//     // y: '100%',
//     y: "0",
//   },
//   enter: {
//     opacity: 1,
//     y: " 0",
//     transition: {
//       duration: duration,
//       delay: duration * 2,
//       when: "beforeChildren",
//       ease: [0.775, 0, 0.17, 1.005],
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: "200",
//     transition: {
//       duration: duration,
//       // delay: duration,
//       // when: 'beforeChildren',
//     },
//   },
// }

// interface PageContextProps {
//   location?: {
//     pathname: string
//   }
//   children: ReactNode
// }

// const PageTransition = ({ location, children }: PageContextProps) => {
//   const pathName = usePathname()
//   console.log(pathName)
//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         // transition={{ delay: 0.5 }}
//         exit={{ opacity: 0 }}
//         className="page-transition"
//         key={pathName}

//         // variants={variants}
//         // initial="initial"
//         // animate="enter"
//         // exit="exit"
//         // onAnimationComplete={_onAnimationComplete}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default PageTransition
