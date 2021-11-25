import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import BlogCard from '../components/BlogCards/BlogCard'
import { BlogCardWrapper } from '../components/BlogCards/BlogCards.styled'
import { getArticles } from '../features/articles/articleSlice'

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  const dispatch: any = useAppDispatch()

  const articles: any[] = useAppSelector((state) => state.article.articles)

  const getHandler = (e: any) => {
    e.preventDefault()
    dispatch(getArticles())
  }

  return (
    <>
      <BlogCardWrapper>
        {articles.length > 0 &&
          articles.map((article) => (
            <BlogCard data={article} key={article._id} />
          ))}
        {articles.length === 0 && (
          <button onClick={getHandler}>
            <h1>GET THEM ALL </h1>
          </button>
        )}
      </BlogCardWrapper>
    </>
  )
}
export default Blog
