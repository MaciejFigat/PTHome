import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import {
  getUsers,
  updateUserProfile,
  deleteUser,
} from '../features/users/userSlice'
import { SendButton } from '../components/ArticleTable/ArticleForm.styled'
import {
  AdminContainer,
  Table,
  TableWrapper,
} from '../components/ArticleTable/ArticleTable.styled'
interface UserAdminProps {}

const UserAdmin: React.FC<UserAdminProps> = ({}) => {
  const dispatch: any = useAppDispatch()
  const users: any[] = useAppSelector((state) => state.user.allUsers)

  const getUsersHandler = () => {
    dispatch(getUsers(1))
  }
  const updatedUser = {
    name: 'BobTheTest2',
    password: '123',
  }
  const updateUserHandler = () => {
    dispatch(updateUserProfile(updatedUser))
  }
  const deleteUserHandler = (id: string) => {
    dispatch(deleteUser(id))
  }

  // getUsers I have to pass an argument (anything really) because my thunk in the slice needs an argument to also receive thunkAPI, when thunkAPI is alone it's not working
  useEffect(() => {
    dispatch(getUsers(1))
  }, [dispatch])

  return (
    <AdminContainer>
      <SendButton onClick={getUsersHandler}>GET USERS TEST</SendButton>
      <SendButton onClick={updateUserHandler}>update User TEST</SendButton>
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
                    <SendButton>
                      <Link to={`/admin/user/${user._id}/edit`}>Edit</Link>
                    </SendButton>

                    <SendButton
                      // variant='danger'
                      className='btn-sm'
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
  )
}
export default UserAdmin
