import React, { useState, useEffect } from 'react'
import { ToastBody, ToastContainer, ToastWrapper } from './Toast.styled'

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
    <ToastWrapper>
      <ToastContainer variant={variant} position={toastPosition}>
        <ToastBody variant={variant}>{toastMessage}</ToastBody>
      </ToastContainer>
    </ToastWrapper>
  )
}
export default Toast
