import React from 'react'
import { BlogCard, BlogCardImg } from './BlogCards.styled'

interface BlogData {
  topline: string
  headline: string
  subtitle: string
  buttonLabel?: string
  img: any
}

interface BlogCardsProps {
  data: BlogData
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const BlogCards: React.FC<BlogCardsProps> = ({ data }) => {
  return (
    <>
      <BlogCard>
        {' '}
        <BlogCardImg src={data.img} />
        <h3>{data.topline}</h3>
        <h2>{data.headline}</h2>
        <p>{data.subtitle}</p>
      </BlogCard>
    </>
  )
}
export default BlogCards
