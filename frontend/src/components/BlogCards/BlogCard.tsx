import React from 'react'
import { Link } from 'react-router-dom'
import {
  BlogCardContainer,
  BlogCardImg,
  CardBody,
  CardFooter,
  CardHeader,
} from './BlogCards.styled'

interface BlogData {
  _id?: string
  topline: string
  headline: string
  subtitle: string
  buttonLabel?: string
  img?: any
  imgLink?: any
  author: string
}

interface BlogCardProps {
  data: BlogData
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  return (
    <>
      <Link to={`/blog/article/${data._id}`}>
        <BlogCardContainer>
          {' '}
          <BlogCardImg src={data.imgLink} />
          <CardHeader>{data.headline}</CardHeader>
          <CardBody>{data.topline}</CardBody>
          <CardFooter>by {data.author}</CardFooter>
        </BlogCardContainer>
      </Link>
    </>
  )
}
export default BlogCard
