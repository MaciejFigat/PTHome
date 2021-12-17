import React, { useEffect } from 'react'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import ArticleTable from '../components/ArticleTable/ArticleTable'
import Toast from '../components/Toast/Toast'

import { AdminWrapper } from '../components/ArticleTable/ArticleTable.styled'
import { useNavigate } from 'react-router-dom'

interface BlogAdminProps {}

const BlogAdmin: React.FC<BlogAdminProps> = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  let navigate = useNavigate()
  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      navigate('/login')
    }
  }, [userInfo, navigate])

  return (
    <AdminWrapper>
      <Toast option='deleteArticle' />
      <ArticleTable />
    </AdminWrapper>
  )
}
export default BlogAdmin
