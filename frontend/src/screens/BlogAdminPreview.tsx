import React, { useEffect } from 'react'
import { UserInfo, ArticleCreated } from '../interfaces'
import { Link } from 'react-router-dom'
import { SendButton } from '../components/ArticleTable/ArticleForm.styled'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { createArticle } from '../features/articles/articleSlice'
interface BlogAdminPreviewProps {
  history: any
}

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
    <div>
      <h2>Topline</h2>
      <h2>Subtitle</h2>
      <h2>Author</h2>
      <SendButton variant='success' onClick={createHandler}>
        Create
      </SendButton>
      <SendButton variant='info'>
        {' '}
        <Link to={`/admin/blog/create`}>Back to articles editing</Link>
      </SendButton>
    </div>
  )
}
export default BlogAdminPreview
// /admin/blog/create
