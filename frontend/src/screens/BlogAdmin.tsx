import React, { useEffect } from 'react'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import ArticleTable from '../components/ArticleTable/ArticleTable'
import Toast from '../components/Toast/Toast'
import { RouteComponentProps } from 'react-router-dom'
import { AdminWrapper } from '../components/ArticleTable/ArticleTable.styled'

interface BlogAdminProps extends RouteComponentProps<any> {}

const BlogAdmin: React.FC<BlogAdminProps> = ({ history }) => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      history.push('/login')
    }
  }, [userInfo, history])

  return (
    <AdminWrapper>
      <Toast option='deleteArticle' />
      <ArticleTable />
    </AdminWrapper>
  )
}
export default BlogAdmin
