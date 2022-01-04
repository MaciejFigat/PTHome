import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Toast from '../components/Toast/Toast'
import { useAppDispatch } from '../app/reduxHooks'

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
} from '../components/ArticleTable/ArticleForm.styled'
import { SendButton } from '../components/Buttons/Buttons.styled'
import {
  AdminContainer,
  AdminWrapper,
} from '../components/ArticleTable/ArticleTable.styled'
import useRedirectListener from '../hooks/useRedirectListener'

interface BlogAdminCreateProps {}

const BlogAdminCreate: React.FC<BlogAdminCreateProps> = () => {
  const dispatch: any = useAppDispatch()
  // hook used to redirect to /login when not logged in
  useRedirectListener()
  const [topline, setTopline] = useState(
    '“That God is colouring Newton doth shew”—William Blake'
  )
  const [headline, setHeadline] = useState(
    'Structure of Rime XXVIII: In Memoriam Wallace Stevens'
  )
  const [subtitle, setSubtitle] = useState(
    '       Erecting beyond the boundaries of all government his grand Station and Customs, I find what I have made there a Gate, a staking out of his art in Inconsequence.  I have in mind a poetry that will frame the willingness of the heart and deliver it over to the arrest of Time, a sentence  as if there could stand some solidity  most spacial in its intent against the drifts and appearances that arise and fall away in time from the crude events of physical space.  The Mind alone holds the consequence of the erection to be true, so that Desire and Imagination usurp the place of the Invisible Throne. It is an angel then, weeping and yet ever attending the betrayal of the Word I mean to come to in the end.'
  )
  const [author, setAuthor] = useState('ROBERT DUNCAN')
  const [imgLink, setImgLink] = useState(
    'https://source.unsplash.com/NvFkYV2ngOk'
  )

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

  return (
    <AdminWrapper>
      <Toast option='createArticle' />

      <AdminContainer>
        <h1>Blog ADMIN CREATE</h1>{' '}
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
                <SendButton
                  variant='success'
                  large
                  fontLarge
                  onClick={createHandler}
                >
                  Create & Save
                </SendButton>
                <SendButton
                  variant='info'
                  large
                  fontLarge
                  onClick={testHandler}
                >
                  {' '}
                  <Link to={`/admin/blog/create/preview`}>Preview</Link>
                </SendButton>
              </SendButtonWrapper>
            </ContactFormStyled>{' '}
          </ContactFormContainer>
        </ResponsiveDiv>
      </FormContainerDiv>
    </AdminWrapper>
  )
}
export default BlogAdminCreate
