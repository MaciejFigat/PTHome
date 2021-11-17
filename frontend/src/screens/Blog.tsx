import React from 'react'
import BlogCards from '../components/BlogCards/BlogCards'
import { BlogCardWrapper } from '../components/BlogCards/BlogCards.styled'
import { homeData, homeDataTwo, homeDataThree } from '../data/homeData'
interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <>
      <BlogCardWrapper>
        <BlogCards data={homeData} />
        <BlogCards data={homeDataTwo} />
        <BlogCards data={homeDataThree} />
      </BlogCardWrapper>
    </>
  )
}
export default Blog
