import React from 'react'

interface ArticleById {
  _id: string
  topline: string
  headline: string
  subtitle: string
  author: string
  imgLink: string
  createdAt: string
}

interface ArticleProps {
  data: ArticleById
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const Article: React.FC<ArticleProps> = ({ data }) => {
  return (
    <>
      <h5>{data.createdAt}</h5>
      <p>{data.headline}</p>
      <h4>{data.topline}</h4>
      <img src={data.imgLink} alt='for posteriority' />
      <p>{data.subtitle}</p>
    </>
  )
}
export default Article
