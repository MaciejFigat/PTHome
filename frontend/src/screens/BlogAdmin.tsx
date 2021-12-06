import React, { useEffect } from 'react'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import ArticleTable from '../components/ArticleTable/ArticleTable'

interface BlogAdminProps {
  history: any
}

const BlogAdmin: React.FC<BlogAdminProps> = ({ history }) => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      history.push('/login')
    }
  }, [userInfo, history])
  return (
    <>
      <ArticleTable />
    </>
  )
}
export default BlogAdmin
