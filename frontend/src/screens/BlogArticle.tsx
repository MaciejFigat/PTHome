import React, { useEffect } from 'react'
import Article from '../components/BlogArticle/Article'
import { ArticleById } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { getArticleById } from '../features/articles/articleSlice'
interface BlogArticleProps {
  history: any

  match: any
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
