import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
interface StaggerChildrenWrapperProps {
  children?: ReactNode
  delay?: 1 | 2 | 3
  direction?: 1 | -1
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
      delayChildren: 0.2,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
      delayChildren: 0.2,
    },
  },
}
//  Warning - wrapper incomplete ---- To make it work You need to wrap the element within the children you want to animate and also set itemVariants
// const itemVariants = {
//     closed: {
//       opacity: 0,
//     },
//     open: { opacity: 1 },
//   }
/* <motion.div whileHover={{ scale: 1.075 }} variants={itemVariants}></motion.div> */
const StaggerChildrenWrapper: React.FC<StaggerChildrenWrapperProps> = ({
  children,
  delay,
  direction,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial='closed'
        animate='open'
        exit='closed'
        variants={sideVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
export default StaggerChildrenWrapper
