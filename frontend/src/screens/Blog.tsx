import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import BlogCard from '../components/BlogCards/BlogCard'
import {
  BlogCardWrapper,
  BlogWrapper,
} from '../components/BlogCards/BlogCards.styled'
import SmallSection from '../components/SectionSmall/SmallSection'
import { getArticles } from '../features/articles/articleSlice'

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  const dispatch: any = useAppDispatch()

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  const articles: any[] = useAppSelector((state) => state.article.articles)

  const getHandler = (e: any) => {
    e.preventDefault()
    dispatch(getArticles())
  }

  return (
    <>
      {' '}
      <SmallSection
        title='My blog'
        description='most recent articles'
        variant='secondary'
      />
      <BlogWrapper>
        <BlogCardWrapper>
          {articles.length > 0 &&
            articles
              .map((article) => <BlogCard data={article} key={article._id} />)
              .reverse()}
          {articles.length === 0 && (
            <button onClick={getHandler}>
              <h1>GET THEM ALL </h1>
            </button>
          )}
        </BlogCardWrapper>
      </BlogWrapper>
    </>
  )
}
export default Blog
