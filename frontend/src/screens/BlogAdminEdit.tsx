import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { getArticleById, editArticle } from '../features/articles/articleSlice'
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
} from '../components/ArticleForm/ArticleForm.styled'
interface ArticleById {
  _id: string
  topline: string
  headline: string
  subtitle: string
  author: string
  imgLink: string
}
interface BlogAdminEditProps {
  history: RouteComponentProps
  match: any
}

const BlogAdminEdit: React.FC<BlogAdminEditProps> = ({ history, match }) => {
  const dispatch: any = useAppDispatch()

  const article: ArticleById = useAppSelector(
    (state) => state.article.articleById
  )
  const {
    _id: id,
    topline: toplineState,
    headline: headlineState,
    subtitle: subtitleState,
    author: authorState,
    imgLink: imgLinkState,
  } = article

  const [topline, setTopline] = useState(toplineState)
  const [headline, setHeadline] = useState(headlineState)
  const [subtitle, setSubtitle] = useState(subtitleState)
  const [author, setAuthor] = useState(authorState)
  const [imgLink, setImgLink] = useState(imgLinkState)

  const editedArticle = {
    _id: id,
    topline: topline,
    headline: headline,
    subtitle: subtitle,
    imgLink: imgLink,
    author: author,
  }
  const editHandler = (e: any) => {
    e.preventDefault()
    dispatch(editArticle(editedArticle))
  }

  useEffect(() => {
    dispatch(getArticleById(match.params.id))
  }, [dispatch, match])
  return (
    <>
      <h1>EDIT THIS ARTICLE</h1>
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
                <SendButton onClick={editHandler}>Edit</SendButton>
              </SendButtonWrapper>
            </ContactFormStyled>{' '}
          </ContactFormContainer>
        </ResponsiveDiv>
      </FormContainerDiv>
    </>
  )
}
export default BlogAdminEdit
