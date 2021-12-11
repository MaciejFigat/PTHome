import React, { useState, useEffect } from 'react'
import { UserInfo, ArticleCreated } from '../interfaces'
import { Link } from 'react-router-dom'
import Toast from '../components/Toast/Toast'
import { SendButton } from '../components/ArticleTable/ArticleForm.styled'
import Article from '../components/BlogArticle/Article'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { createArticle } from '../features/articles/articleSlice'
import { articleSuccessReset } from '../features/articles/articleSlice'
import {
  AdminContainer,
  AdminWrapper,
} from '../components/ArticleTable/ArticleTable.styled'
import { RouteComponentProps } from 'react-router-dom'

interface BlogAdminPreviewProps extends RouteComponentProps<any> {}

const BlogAdminPreview: React.FC<BlogAdminPreviewProps> = ({ history }) => {
  const dispatch: any = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const articleTest: ArticleCreated = useAppSelector(
    (state) => state.article.articleTest
  )
  const { topline, headline, subtitle, author, imgLink } = articleTest
  const successCreate: boolean = useAppSelector(
    (state) => state.article.success
  )
  const loadingCreate: boolean = useAppSelector(
    (state) => state.article.loading
  )
  const newArticleInfo = {
    topline: topline,
    headline: headline,
    subtitle: subtitle,
    author: author,
    imgLink: imgLink,
  }
  const testData = {
    _id: 'testId',
    topline: topline,
    headline: headline,
    subtitle: subtitle,
    author: author,
    imgLink: imgLink,
    createdAt: '2021-11-20TtestDate',
  }
  const [toastVariant, setToastVariant] = useState<
    'none' | 'success' | 'danger' | 'info' | 'warning'
  >('none')
  const [toastMessage, setToastMessage] = useState<string>('')
  const createHandler = (e: any) => {
    e.preventDefault()
    dispatch(createArticle(newArticleInfo))
  }
  useEffect(() => {
    if (successCreate === true && loadingCreate === false) {
      setToastVariant('info')
      setToastMessage('Article Created')
    }
  }, [loadingCreate, successCreate])
  useEffect(() => {
    const timer = setTimeout(() => {
      setToastVariant('none')
      dispatch(articleSuccessReset())
    }, 3000)
    return () => clearTimeout(timer)
  }, [dispatch, loadingCreate])
  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      history.push('/login')
    }
  }, [userInfo, history])
  return (
    <AdminWrapper>
      <Toast toastMessage={toastMessage} variant={toastVariant} />
      <Article data={testData} />
      <AdminContainer>
        <SendButton variant='success' onClick={createHandler} large fontLarge>
          Save the article
        </SendButton>
        <SendButton variant='info' large fontLarge>
          {' '}
          <Link to={`/admin/blog/create`}>Back to article creation</Link>
        </SendButton>
      </AdminContainer>
    </AdminWrapper>
  )
}
export default BlogAdminPreview
