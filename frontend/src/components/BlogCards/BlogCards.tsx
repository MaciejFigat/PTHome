import React from 'react'
import { BlogCard } from './BlogCards.styled'

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
      <h3>{data.topline}</h3>
      <h2>{data.headline}</h2>
      <h1>{data.subtitle}</h1>
      <BlogCard>BlogCard 1</BlogCard>
    </>
  )
}
export default BlogCards
