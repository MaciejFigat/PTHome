import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
interface DropAnimationWrapperProps {
  children?: ReactNode
}

const DropAnimationWrapper: React.FC<DropAnimationWrapperProps> = ({
  children,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
export default DropAnimationWrapper
