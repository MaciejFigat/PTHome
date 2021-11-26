import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  createArticle,
  getArticles,
  deleteArticle,
  editArticle,
} from '../../features/articles/articleSlice'

import {
  ResponsiveDiv,
  FormContainerDiv,
  ContactFormContainer,
  ContactFormStyled,
  ContactField,
  ContactFieldContent,
  MessageField,
  SendButtonWrapper,
  SendButton,
} from './ArticleForm.styled'

interface ArticleFormProps {}

const ArticleForm: React.FC<ArticleFormProps> = () => {
  const dispatch: any = useAppDispatch()

  const articles: any[] = useAppSelector((state) => state.article.articles)

  const [topline, setTopline] = useState('topline')
  const [headline, setHeadline] = useState('headline')
  const [subtitle, setSubtitle] = useState('subtitle')
  const [author, setAuthor] = useState('author')
  const [imgLink, setImgLink] = useState('link')

  const newArticleInfo = {
    topline: topline,
    headline: headline,
    subtitle: subtitle,
    author: author,
    imgLink: imgLink,
  }
  // testing editArticle
  const article = {
    _id: '6197f2fe0855d331b0177fd9',
    topline: 'testing Editing',
    headline:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, mollitia?',
    subtitle: 'Lorem ipsum dolor sit amet consectet.',
    imgLink: 'https://source.unsplash.com/-fkLJ9Ws5XQ',
    author: 'James 2',
  }

  const editHandler = (e: any) => {
    e.preventDefault()
    dispatch(editArticle(article))
  }

  const deleteHandler = (id: string) => {
    dispatch(deleteArticle(id))
  }

  const createHandler = (e: any) => {
    e.preventDefault()
    dispatch(createArticle(newArticleInfo))
  }
  const getHandler = (e: any) => {
    e.preventDefault()
    dispatch(getArticles())
  }

  return (
    <>
      <SendButton>
        <Link to='/admin/blog/create'>Create New Article</Link>
      </SendButton>
      <table>
        <thead>
          <tr>
            <th>Topline</th>
            <th>Headline</th>
            <th>Author</th>
            <th>Last update</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {articles !== [] &&
            articles.map((article) => (
              <tr key={article._id}>
                <td>{article.topline}</td>
                <td>{article.headline}</td>
                <td>{article.author}</td>
                <td>{article.updatedAt}</td>
                <td>
                  <SendButton>
                    {' '}
                    <Link to={`/admin/blog/${article._id}`}>Test Edit</Link>
                  </SendButton>

                  <SendButton
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(article._id)}
                  >
                    Delete
                  </SendButton>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <FormContainerDiv>
        <ResponsiveDiv>
          {' '}
          <ContactFormContainer>
            <ContactFormStyled>
              <ContactField>
                <label>Topline</label>
                <ContactFieldContent
                  type='text'
                  value={topline}
                  placeholder='Toopline!!!'
                  onChange={(e: any) => setTopline(e.target.value)}
                />
              </ContactField>
              <ContactField>
                <label>Headline</label>
                <ContactFieldContent
                  type='headline'
                  value={headline}
                  placeholder='Headlin here'
                  onChange={(e: any) => setHeadline(e.target.value)}
                />
              </ContactField>
              <ContactField>
                <label>Subtitle</label>
                <MessageField
                  as='textarea'
                  row='8'
                  value={subtitle}
                  placeholder='Subtitle here'
                  onChange={(e: any) => setSubtitle(e.target.value)}
                ></MessageField>
              </ContactField>
              <ContactField>
                <label>Author</label>
                <ContactFieldContent
                  value={author}
                  placeholder='Set the author'
                  onChange={(e: any) => setAuthor(e.target.value)}
                ></ContactFieldContent>
              </ContactField>
              <ContactField>
                <label>Img link</label>
                <ContactFieldContent
                  value={imgLink}
                  placeholder='put on the lotion'
                  onChange={(e: any) => setImgLink(e.target.value)}
                ></ContactFieldContent>
              </ContactField>
              <SendButtonWrapper>
                <SendButton onClick={getHandler}>Get Test</SendButton>
                <SendButton onClick={editHandler}>Edit</SendButton>
                <SendButton onClick={deleteHandler}>Delete</SendButton>
                <SendButton onClick={createHandler}>Create</SendButton>
              </SendButtonWrapper>
            </ContactFormStyled>{' '}
          </ContactFormContainer>
        </ResponsiveDiv>
      </FormContainerDiv>
    </>
  )
}
export default ArticleForm
