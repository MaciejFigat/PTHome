import React, { useState, useEffect } from 'react'
import { ToastBody, ToastContainer } from './Toast.styled'

interface ToastProps {
  toastMessage: string
  toastVersion: string
}

const Toast: React.FC<ToastProps> = ({ toastMessage, toastVersion }) => {
  const [toastPosition, setToastPosition] = useState<string>('show')

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastPosition('hide')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <ToastContainer toastVersion position={toastPosition}>
      <ToastBody>{toastMessage}</ToastBody>
    </ToastContainer>
  )
}
export default Toast
