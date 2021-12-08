import React, { useEffect } from 'react'
import { UserInfo, ArticleById } from '../interfaces'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'
import { SendButton } from '../components/ArticleTable/ArticleForm.styled'
import Article from '../components/BlogArticle/Article'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { editArticle } from '../features/articles/articleSlice'
import { AdminContainer } from '../components/ArticleTable/ArticleTable.styled'

interface BlogAdminEditPreviewProps extends RouteComponentProps<any> {}

const BlogAdminEditPreview: React.FC<BlogAdminEditPreviewProps> = ({
  history,
}) => {
  const dispatch: any = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
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

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      history.push('/login')
    }
  }, [userInfo, history])
  return (
    <>
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
    </>
  )
}
export default BlogAdminEditPreview
// /admin/blog/create
