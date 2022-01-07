import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
interface FadeInAnimationWrapperProps {
  children?: ReactNode
  delay?: 1 | 2 | 3
}

const sideVariants = {
  closed: {
    opacity: 0,
    transition: {
      delay: 0.3,
      duration: 0.9,
    },
  },
  open: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.9,
    },
  },
}

const FadeInAnimationWrapper: React.FC<FadeInAnimationWrapperProps> = ({
  children,
  delay,
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
export default FadeInAnimationWrapper
