import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import ArticleTable from '../components/ArticleTable/ArticleTable'
import Toast from '../components/Toast/Toast'
import { RouteComponentProps } from 'react-router-dom'
import { AdminWrapper } from '../components/ArticleTable/ArticleTable.styled'
import { articleSuccessReset } from '../features/articles/articleSlice'

interface BlogAdminProps extends RouteComponentProps<any> {}

const BlogAdmin: React.FC<BlogAdminProps> = ({ history }) => {
  const dispatch: any = useAppDispatch()

  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const successDelete: boolean = useAppSelector(
    (state) => state.article.success
  )
  const loadingDelete: boolean = useAppSelector(
    (state) => state.article.loading
  )

  const [toastVariant, setToastVariant] = useState<
    'none' | 'success' | 'danger' | 'info' | 'warning'
  >('none')
  const [toastMessage, setToastMessage] = useState<string>('')
  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      history.push('/login')
    }
  }, [userInfo, history])

  useEffect(() => {
    if (successDelete === true && loadingDelete === false) {
      setToastVariant('info')
      setToastMessage('Article Deleted')
    }
  }, [loadingDelete, successDelete])

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastVariant('none')
      dispatch(articleSuccessReset())
    }, 3000)
    return () => clearTimeout(timer)
  }, [dispatch, loadingDelete])

  return (
    <AdminWrapper>
      <Toast toastMessage={toastMessage} variant={toastVariant} />
      <ArticleTable />
    </AdminWrapper>
  )
}
export default BlogAdmin
