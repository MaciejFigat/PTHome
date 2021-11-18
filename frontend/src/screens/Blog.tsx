import React from 'react'
import BlogCard from '../components/BlogCards/BlogCard'
import { BlogCardWrapper } from '../components/BlogCards/BlogCards.styled'
import {
  homeData,
  homeDataTwo,
  homeDataThree,
  homeDataFour,
  homeDataFive,
  homeDataSix,
} from '../data/blogData'

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <>
      <BlogCardWrapper>
        <BlogCard data={homeData} />
        <BlogCard data={homeDataTwo} />
        <BlogCard data={homeDataThree} />
        <BlogCard data={homeDataFour} />
        <BlogCard data={homeDataFive} />
        <BlogCard data={homeDataSix} />
      </BlogCardWrapper>
    </>
  )
}
export default Blog
