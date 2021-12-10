import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserInfo } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { getUsers, deleteUser } from '../features/users/userSlice'
import { SendButton } from '../components/ArticleTable/ArticleForm.styled'
import {
  AdminContainer,
  AdminWrapper,
  Table,
  TableWrapper,
} from '../components/ArticleTable/ArticleTable.styled'
import { RouteComponentProps } from 'react-router-dom'
import Toast from '../components/Toast/Toast'

interface UserAdminProps extends RouteComponentProps<any> {}

const UserAdmin: React.FC<UserAdminProps> = ({ history }) => {
  const dispatch: any = useAppDispatch()
  const users: any[] = useAppSelector((state) => state.user.allUsers)
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const deleteUserHandler = (id: string) => {
    dispatch(deleteUser(id))
  }
  const [toastVariant, setToastVariant] = useState<
    'none' | 'success' | 'danger' | 'info' | 'warning'
  >('none')
  const [toastMessage, setToastMessage] = useState<string>('')

  // getUsers I have to pass an argument (anything really) because my thunk in the slice needs an argument to also receive thunkAPI, when thunkAPI is alone it's not working
  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      history.push('/login')
    }
    dispatch(getUsers(1))
  }, [dispatch, userInfo, history])

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastVariant('success')
      setToastMessage('testing testing')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AdminWrapper>
      <Toast toastMessage={toastMessage} variant={toastVariant} />
      <AdminContainer>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>name | email | admin</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user) => (
                  <tr key={user._id}>
                    <td>
                      {user.name} | {user.email} |&nbsp;
                      {user.isAdmin === true ? 'Yes' : 'No'}
                    </td>

                    <td>
                      <SendButton variant='info'>
                        <Link to={`/admin/user/${user._id}/edit`}>Edit</Link>
                      </SendButton>

                      <SendButton
                        variant='danger'
                        onClick={() => deleteUserHandler(user._id)}
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
    </AdminWrapper>
  )
}
export default UserAdmin
