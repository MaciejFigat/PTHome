import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  getArticles,
  deleteArticle,
} from '../../features/articles/articleSlice'

import { SendButton } from './ArticleForm.styled'

interface ArticleFormProps {}

const ArticleForm: React.FC<ArticleFormProps> = () => {
  const dispatch: any = useAppDispatch()

  const articles: any[] = useAppSelector((state) => state.article.articles)

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  const deleteHandler = (id: string) => {
    dispatch(deleteArticle(id))
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
    </>
  )
}
export default ArticleForm
