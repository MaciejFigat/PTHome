import React from 'react'
import { ArticleById } from '../interfaces'
import { Link } from 'react-router-dom'
import Toast from '../components/Toast/Toast'
import { SendButton } from '../components/Buttons/Buttons.styled'
import Article from '../components/BlogArticle/Article'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { editArticle } from '../features/articles/articleSlice'
import {
  AdminContainer,
  AdminWrapper,
} from '../components/ArticleTable/ArticleTable.styled'
import useRedirectListener from '../hooks/useRedirectListener'

interface BlogAdminEditPreviewProps {}

const BlogAdminEditPreview: React.FC<BlogAdminEditPreviewProps> = () => {
  const dispatch: any = useAppDispatch()

  useRedirectListener()

  const articleEdit: ArticleById = useAppSelector(
    (state) => state.article.articleById
  )

  const {
    _id: id,
    topline,
    headline,
    subtitle,
    author,
    imgLink,
    createdAt,
  } = articleEdit

  const editedArticle = {
    _id: id,
    topline: topline,
    headline: headline,
    subtitle: subtitle,
    author: author,
    imgLink: imgLink,
    createdAt: createdAt,
  }
  const editHandler = (e: any) => {
    e.preventDefault()
    dispatch(editArticle(editedArticle))
  }

  return (
    <AdminWrapper>
      <Toast option='editArticle' />
      <Article data={editedArticle} />
      <AdminContainer>
        <SendButton variant='success' onClick={editHandler} large fontLarge>
          Save the changes
        </SendButton>
        <SendButton variant='info' large fontLarge>
          {' '}
          <Link to={`/admin/blog/${id}`}>Back to editing</Link>
        </SendButton>
      </AdminContainer>
    </AdminWrapper>
  )
}
export default BlogAdminEditPreview
