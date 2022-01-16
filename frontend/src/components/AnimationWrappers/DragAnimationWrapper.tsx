import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface DragAnimationWrapperProps {
  children: ReactNode
  constraintsRef: any
}

const DragAnimationWrapper: React.FC<DragAnimationWrapperProps> = ({
  children,
  constraintsRef,
}) => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -20,
        left: -20,
        right: 20,
        bottom: 20,
      }}
      //   dragConstraints={constraintsRef}
    >
      {children}
    </motion.div>
  )
}
export default DragAnimationWrapper
