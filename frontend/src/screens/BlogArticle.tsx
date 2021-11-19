import React from 'react'
import Article from '../components/BlogArticle/Article'
import { homeData } from '../data/blogData'
interface BlogArticleProps {}

const BlogArticle: React.FC<BlogArticleProps> = () => {
  return (
    <>
      <Article data={homeData} />
    </>
  )
}
export default BlogArticle
