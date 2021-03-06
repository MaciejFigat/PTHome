import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import {
  getArticles,
  deleteArticle,
} from '../../features/articles/articleSlice'
import { SendButton } from '../Buttons/Buttons.styled'
import { Table, TableWrapper, AdminContainer } from './ArticleTable.styled'

interface ArticleTableProps {}

const ArticleTable: React.FC<ArticleTableProps> = () => {
  const dispatch: any = useAppDispatch()

  const articles: any[] = useAppSelector((state) => state.article.articles)

  const articleSuccess: boolean = useAppSelector(
    (state) => state.article.success
  )

  useEffect(() => {
    dispatch(getArticles())
    if (articleSuccess === true) {
      dispatch(getArticles())
    }
  }, [dispatch, articleSuccess])

  const deleteHandler = (id: string) => {
    dispatch(deleteArticle(id))
  }

  return (
    <AdminContainer>
      <SendButton variant='success' large fontLarge>
        <Link to='/admin/blog/create'>Create New Article</Link>
      </SendButton>
      <SendButton variant='primary' large fontLarge>
        <Link to='/admin'>Go back to Admin Panel</Link>
      </SendButton>
      <SendButton variant='secondary' large fontLarge>
        <Link to='/blog'>Go back to blog</Link>
      </SendButton>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Topline</th>
              <th>Author</th>
              <th>Last update</th>
            </tr>
          </thead>
          <tbody>
            {articles &&
              Object.keys(articles).length > 0 &&
              articles.map((article) => (
                <tr key={article._id}>
                  <td>{article.topline}</td>

                  <td>{article.author}</td>
                  <td>{article.updatedAt.substring(0, 10)}</td>
                  <td>
                    <SendButton variant='info'>
                      {' '}
                      <Link to={`/admin/blog/${article._id}`}>Edit</Link>
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
        </Table>
      </TableWrapper>
    </AdminContainer>
  )
}
export default ArticleTable
