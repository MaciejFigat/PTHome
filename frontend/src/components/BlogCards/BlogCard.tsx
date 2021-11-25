import React from 'react'
import { Link } from 'react-router-dom'
import {
  BlogCardContainer,
  BlogCardImg,
  CardBody,
  CardButton,
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
}

interface BlogCardProps {
  data: BlogData
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  return (
    <>
      <BlogCardContainer>
        {' '}
        <BlogCardImg src={data.imgLink} />
        <CardHeader>{data.topline}</CardHeader>
        <CardBody>{data.headline}</CardBody>
        <CardFooter>
          <CardButton>
            {' '}
            <Link to={`/blog/article/${data._id}`}>Test GO</Link>
          </CardButton>
          <CardButton>
            <Link to='/blog/articleOne'>go to blog</Link>
          </CardButton>
        </CardFooter>
      </BlogCardContainer>
    </>
  )
}
export default BlogCard
