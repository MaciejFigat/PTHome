import React, { useState, useEffect } from 'react'
import { UserInfo, ArticleById } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import {
  getArticleById,
  editArticle,
  articleEditTest,
} from '../features/articles/articleSlice'
import { Link } from 'react-router-dom'
import {
  ResponsiveDiv,
  FormContainerDiv,
  ContactFormContainer,
  ContactFormStyled,
  ContactField,
  ContactFieldContent,
  MessageField,
  SendButton,
  SendButtonWrapper,
} from '../components/ArticleTable/ArticleForm.styled'
import { AdminContainer } from '../components/ArticleTable/ArticleTable.styled'
import { RouteComponentProps } from 'react-router-dom'

interface BlogAdminEditProps extends RouteComponentProps<any> {}

const BlogAdminEdit: React.FC<BlogAdminEditProps> = ({ history, match }) => {
  const dispatch: any = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
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

  const editPreviewHandler = () => {
    dispatch(articleEditTest(editedArticle))
  }

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      history.push('/login')
    }
    dispatch(getArticleById(match.params.id))
    setTopline(toplineState)
    setHeadline(headlineState)
    setSubtitle(subtitleState)
    setAuthor(authorState)
    setImgLink(imgLinkState)
  }, [
    dispatch,
    match,
    userInfo,
    history,
    headlineState,
    subtitleState,
    authorState,
    imgLinkState,
    toplineState,
  ])
  return (
    <>
      <AdminContainer>
        {' '}
        <h1>EDIT THIS ARTICLE</h1>
      </AdminContainer>
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
                  placeholder='Headline here'
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
                  placeholder='put html link to the picture'
                  onChange={(e: any) => setImgLink(e.target.value)}
                ></ContactFieldContent>
              </ContactField>
              <SendButtonWrapper>
                {' '}
                <SendButton
                  onClick={editHandler}
                  variant='success'
                  large
                  fontLarge
                >
                  Save changes
                </SendButton>
                <SendButton
                  variant='info'
                  onClick={editPreviewHandler}
                  large
                  fontLarge
                >
                  {' '}
                  <Link to={`/admin/blog/edit/preview`}>Preview changes</Link>
                </SendButton>
              </SendButtonWrapper>
            </ContactFormStyled>{' '}
          </ContactFormContainer>
        </ResponsiveDiv>
      </FormContainerDiv>
      <AdminContainer>
        {' '}
        <SendButton onClick={editHandler} variant='success' large fontLarge>
          Save changes
        </SendButton>
        <SendButton variant='info' onClick={editPreviewHandler} large fontLarge>
          {' '}
          <Link to={`/admin/blog/edit/preview`}>Preview changes</Link>
        </SendButton>
      </AdminContainer>
    </>
  )
}
export default BlogAdminEdit
