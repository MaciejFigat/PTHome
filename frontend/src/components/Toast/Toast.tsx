import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { articleSuccessReset } from '../../features/articles/articleSlice'
import { ToastBody, ToastContainer, ToastWrapper } from './Toast.styled'

interface ToastProps {
  option:
    | 'deleteArticle'
    | 'createArticle'
    | 'editArticle'
    | 'userRegister'
    | 'userLogin'
    | 'userEdit'
    | 'userDelete'
}

const Toast: React.FC<ToastProps> = ({ option }) => {
  const dispatch: any = useAppDispatch()

  const successArticle: boolean = useAppSelector(
    (state) => state.article.success
  )
  const loadingArticle: boolean = useAppSelector(
    (state) => state.article.loading
  )
  const [toastMessage, setToastMessage] = useState<string>('')
  const [toastVariant, setToastVariant] = useState<
    'none' | 'success' | 'danger' | 'info' | 'warning'
  >('none')

  useEffect(() => {
    switch (option) {
      case 'deleteArticle':
        if (successArticle === true && loadingArticle === false) {
          setToastVariant('warning')
          setToastMessage('Article Deleted')
        }
        break

      case 'createArticle':
        if (successArticle === true && loadingArticle === false) {
          setToastVariant('success')
          setToastMessage('Article Created')
        }
        break

      case 'editArticle':
        if (successArticle === true && loadingArticle === false) {
          setToastVariant('success')
          setToastMessage('Article Edited')
        }
        break

      default:
        break
    }
  }, [loadingArticle, successArticle, option])

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastVariant('none')
      dispatch(articleSuccessReset())
    }, 3000)
    return () => clearTimeout(timer)
  }, [dispatch, loadingArticle])

  return (
    <ToastWrapper>
      <ToastContainer variant={toastVariant}>
        <ToastBody variant={toastVariant}>{toastMessage}</ToastBody>
      </ToastContainer>
    </ToastWrapper>
  )
}
export default Toast
