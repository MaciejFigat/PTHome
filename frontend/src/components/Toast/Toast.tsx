import React from 'react'
import { ToastBody, ToastContainer, ToastWrapper } from './Toast.styled'

interface ToastProps {
  toastMessage: string
  variant: 'none' | 'success' | 'danger' | 'info' | 'warning'
}

const Toast: React.FC<ToastProps> = ({ toastMessage, variant }) => {
  return (
    <ToastWrapper>
      <ToastContainer variant={variant}>
        <ToastBody variant={variant}>{toastMessage}</ToastBody>
      </ToastContainer>
    </ToastWrapper>
  )
}
export default Toast
