import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import { createArticle, articleTest } from '../features/articles/articleSlice'
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
} from '../components/ArticleTable/ArticleForm.styled'
interface BlogAdminCreateProps {
  history: any
}

const BlogAdminCreate: React.FC<BlogAdminCreateProps> = ({ history }) => {
  const dispatch: any = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const [topline, setTopline] = useState('')
  const [headline, setHeadline] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [author, setAuthor] = useState('')
  const [imgLink, setImgLink] = useState('')

  const newArticleInfo = {
    topline: topline,
    headline: headline,
    subtitle: subtitle,
    author: author,
    imgLink: imgLink,
  }

  const createHandler = (e: any) => {
    e.preventDefault()
    dispatch(createArticle(newArticleInfo))
  }
  const testHandler = (e: any) => {
    e.preventDefault()
    dispatch(articleTest(newArticleInfo))
  }

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      history.push('/login')
    }
  }, [userInfo, history])
  return (
    <>
      <h1>Blog ADMIN CREATE</h1>{' '}
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
                <SendButton variant='success' onClick={createHandler}>
                  Create & Save
                </SendButton>
                <SendButton variant='info' onClick={testHandler}>
                  {' '}
                  <Link to={`/admin/blog/preview`}>Create & Preview</Link>
                </SendButton>
              </SendButtonWrapper>
            </ContactFormStyled>{' '}
          </ContactFormContainer>
        </ResponsiveDiv>
      </FormContainerDiv>
    </>
  )
}
export default BlogAdminCreate
