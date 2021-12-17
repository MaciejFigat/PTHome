import React, { useEffect } from 'react'
import Article from '../components/BlogArticle/Article'
import { ArticleById } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { getArticleById } from '../features/articles/articleSlice'
import { useParams } from 'react-router-dom'

interface BlogArticleProps {}

const BlogArticle: React.FC<BlogArticleProps> = () => {
  const dispatch: any = useAppDispatch()
  const params = useParams()

  const article: ArticleById = useAppSelector(
    (state) => state.article.articleById
  )

  useEffect(() => {
    if (typeof params.id === 'string') dispatch(getArticleById(params.id))
  }, [dispatch, params])
  return (
    <>
      <Article data={article} />
    </>
  )
}
export default BlogArticle
