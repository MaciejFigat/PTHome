import React from 'react'
import ArticleTable from '../components/ArticleTable/ArticleTable'
import Toast from '../components/Toast/Toast'
import { AdminWrapper } from '../components/ArticleTable/ArticleTable.styled'
import useRedirectListener from '../hooks/useRedirectListener'

interface BlogAdminProps {}

const BlogAdmin: React.FC<BlogAdminProps> = () => {
  // hook used to redirect to /login when not logged in
  useRedirectListener()
  return (
    <AdminWrapper>
      <Toast option='deleteArticle' />
      <ArticleTable />
    </AdminWrapper>
  )
}
export default BlogAdmin
