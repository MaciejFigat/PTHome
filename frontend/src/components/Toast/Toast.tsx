import React, { useState, useEffect } from 'react'
import { ToastBody, ToastContainer } from './Toast.styled'

interface ToastProps {
  toastMessage: string
  variant: 'none' | 'success' | 'danger' | 'info' | 'warning'
}

const Toast: React.FC<ToastProps> = ({ toastMessage, variant }) => {
  const [toastPosition, setToastPosition] = useState<string>('show')

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastPosition('hide')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <ToastContainer variant={variant} position={toastPosition}>
      <ToastBody variant={variant}>{toastMessage}</ToastBody>
    </ToastContainer>
  )
}
export default Toast
