import React from 'react'
import { ArticleCreated } from '../interfaces'
import { Link } from 'react-router-dom'
import Toast from '../components/Toast/Toast'
import { SendButton } from '../components/ArticleTable/ArticleForm.styled'
import Article from '../components/BlogArticle/Article'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { createArticle } from '../features/articles/articleSlice'
import {
  AdminContainer,
  AdminWrapper,
} from '../components/ArticleTable/ArticleTable.styled'
import useRedirectListener from '../hooks/useRedirectListener'

interface BlogAdminPreviewProps {}

const BlogAdminPreview: React.FC<BlogAdminPreviewProps> = () => {
  const dispatch: any = useAppDispatch()

  useRedirectListener()
  const articleTest: ArticleCreated = useAppSelector(
    (state) => state.article.articleTest
  )
  const { topline, headline, subtitle, author, imgLink } = articleTest

  const newArticleInfo = {
    topline: topline,
    headline: headline,
    subtitle: subtitle,
    author: author,
    imgLink: imgLink,
  }
  const testData = {
    _id: 'testId',
    topline: topline,
    headline: headline,
    subtitle: subtitle,
    author: author,
    imgLink: imgLink,
    createdAt: '2021-11-20TtestDate',
  }

  const createHandler = (e: any) => {
    e.preventDefault()
    dispatch(createArticle(newArticleInfo))
  }

  return (
    <AdminWrapper>
      <Toast option='createArticle' />
      <Article data={testData} />
      <AdminContainer>
        <SendButton variant='success' onClick={createHandler} large fontLarge>
          Save the article
        </SendButton>
        <SendButton variant='info' large fontLarge>
          {' '}
          <Link to={`/admin/blog/create`}>Back to article creation</Link>
        </SendButton>
      </AdminContainer>
    </AdminWrapper>
  )
}
export default BlogAdminPreview
