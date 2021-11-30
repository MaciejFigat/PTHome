import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { getUsers } from '../features/users/userSlice'
interface UserAdminProps {}

const UserAdmin: React.FC<UserAdminProps> = ({}) => {
  const dispatch: any = useAppDispatch()
  const users: any[] = useAppSelector((state) => state.user.allUsers)

  const getUsersHandler = () => {
    dispatch(getUsers(1))
  }

  useEffect(() => {
    dispatch(getUsers(1))
  }, [dispatch])

  return (
    <div>
      <button onClick={getUsersHandler}>GET USERS TEST</button>
      <table>
        <thead>
          <tr>
            <th>Topline</th>
            <th>Author</th>
            <th>Last update</th>
          </tr>
        </thead>
        <tbody>
          {users === [] &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.topline}</td>

                <td>{user.author}</td>
                <td>{user.updatedAt}</td>
                <td>
                  <button>
                    {' '}
                    {/* <a to={`/admin/blog/${user._id}`}>Edit</a> */}
                  </button>

                  <button
                    // variant='danger'
                    className='btn-sm'
                    // onClick={() => deleteHandler(article._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
export default UserAdmin
