import React from 'react'
import { ArticleById } from '../../interfaces'
import {
  ArticleImage,
  ArticleWrapper,
  ArticleTitle,
  ArticleSection,
  ArticleTopline,
} from './Article.styled'

interface ArticleProps {
  data: ArticleById
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const Article: React.FC<ArticleProps> = ({ data }) => {
  return (
    <ArticleWrapper>
      <h5>{data.createdAt.substring(0, 10)}</h5>
      <p>by {data.author}</p>
      <ArticleTitle>{data.headline}</ArticleTitle>
      <ArticleTopline>{data.topline}</ArticleTopline>
      <ArticleImage src={data.imgLink} alt='article ilustration' />
      <ArticleSection>{data.subtitle}</ArticleSection>
    </ArticleWrapper>
  )
}
export default Article
