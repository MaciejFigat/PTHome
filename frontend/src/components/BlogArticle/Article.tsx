import React from 'react'

// interface BlogData {
//   _id?: string
//   topline?: string
//   headline?: string
//   subtitle?: string
//   buttonLabel?: string
//   img?: any
//   imgLink?: any
//   author?: string
// }
interface ArticleById {
  _id: string
  topline: string
  headline: string
  subtitle: string
  author: string
  imgLink: string
}

interface ArticleProps {
  data: ArticleById
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const Article: React.FC<ArticleProps> = ({ data }) => {
  return (
    <>
      <img src={data.imgLink} alt='for posteriority' />
      <h1>{data.topline}</h1>
      <p>{data.headline}</p>
      <p>{data.subtitle}</p>
    </>
  )
}
export default Article
