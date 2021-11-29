import React, { useEffect } from 'react'
import Article from '../components/BlogArticle/Article'
import { RouteComponentProps } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { getArticleById } from '../features/articles/articleSlice'
interface BlogArticleProps {
  history: RouteComponentProps
  // match: RouteComponentProps
  match: any
}
interface ArticleById {
  _id: string
  topline: string
  headline: string
  subtitle: string
  author: string
  imgLink: string
  createdAt: string
}
const BlogArticle: React.FC<BlogArticleProps> = ({ history, match }) => {
  const dispatch: any = useAppDispatch()

  const article: ArticleById = useAppSelector(
    (state) => state.article.articleById
  )

  useEffect(() => {
    dispatch(getArticleById(match.params.id))
  }, [dispatch, match])
  return (
    <>
      <Article data={article} />
    </>
  )
}
export default BlogArticle
