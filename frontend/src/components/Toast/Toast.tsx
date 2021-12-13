import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { articleSuccessReset } from '../../features/articles/articleSlice'
import { userSuccessReset } from '../../features/users/userSlice'
import { ToastBody, ToastContainer, ToastWrapper } from './Toast.styled'
import { UserInfo as UserName } from '../../interfaces'
interface ToastProps {
  option:
    | 'deleteArticle'
    | 'createArticle'
    | 'editArticle'
    | 'registerUser'
    | 'loginUser'
    | 'editUser'
    | 'deleteUser'
}

const Toast: React.FC<ToastProps> = ({ option }) => {
  const dispatch: any = useAppDispatch()

  const successArticle: boolean = useAppSelector(
    (state) => state.article.success
  )
  const loadingArticle: boolean = useAppSelector(
    (state) => state.article.loading
  )
  const successUser: boolean = useAppSelector((state) => state.user.success)
  const userInfo: UserName = useAppSelector((state) => state.user.userInfo)
  const { name } = userInfo
  const loadingUser: boolean = useAppSelector((state) => state.user.loading)

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
      case 'deleteUser':
        if (successUser === true && loadingUser === false) {
          setToastVariant('warning')
          setToastMessage('User Deleted')
        }
        break
      case 'editUser':
        if (successUser === true && loadingUser === false) {
          setToastVariant('info')
          setToastMessage('User Data Edited')
        }
        break
      case 'registerUser':
        if (successUser === true && loadingUser === false) {
          setToastVariant('success')
          setToastMessage(`Welcome ${name}`)
        }
        break

      default:
        break
    }
  }, [loadingArticle, successArticle, option, successUser, loadingUser])

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (option) {
        case 'deleteArticle':
        case 'createArticle':
        case 'editArticle':
          setToastVariant('none')
          dispatch(articleSuccessReset())
          break

        case 'registerUser':
        case 'editUser':
        case 'deleteUser':
          setToastVariant('none')
          dispatch(userSuccessReset())
          break
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [dispatch, loadingArticle, option, loadingUser])

  return (
    <ToastWrapper>
      <ToastContainer variant={toastVariant}>
        <ToastBody variant={toastVariant}>{toastMessage}</ToastBody>
      </ToastContainer>
    </ToastWrapper>
  )
}
export default Toast
