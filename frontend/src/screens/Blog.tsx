import React from 'react'
import BlogCards from '../components/BlogCards/BlogCards'
import { homeData, homeDataTwo, homeDataThree } from '../data/homeData'
interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <>
      <h1>featured section - here</h1>
      <h2>Blog cards will be here </h2>
      <BlogCards data={homeData} />
      <BlogCards data={homeDataTwo} />
      <BlogCards data={homeDataThree} />
    </>
  )
}
export default Blog
