import React, { useEffect } from 'react'
import { UserInfo, ArticleCreated } from '../interfaces'
import { Link } from 'react-router-dom'
import { SendButton } from '../components/ArticleTable/ArticleForm.styled'
import Article from '../components/BlogArticle/Article'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { createArticle } from '../features/articles/articleSlice'
import { AdminContainer } from '../components/ArticleTable/ArticleTable.styled'
import { RouteComponentProps } from 'react-router-dom'

interface BlogAdminPreviewProps extends RouteComponentProps<any> {}

const BlogAdminPreview: React.FC<BlogAdminPreviewProps> = ({ history }) => {
  const dispatch: any = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
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

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      history.push('/login')
    }
  }, [userInfo, history])
  return (
    <>
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
    </>
  )
}
export default BlogAdminPreview
// /admin/blog/create
