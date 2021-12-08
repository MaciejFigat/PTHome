import React, { useEffect } from 'react'
import { UserInfo } from '../interfaces'
import { Link } from 'react-router-dom'
import { SendButton } from '../components/ArticleTable/ArticleForm.styled'
import { AdminContainer } from '../components/ArticleTable/ArticleTable.styled'
import { useAppSelector } from '../app/reduxHooks'
import { RouteComponentProps } from 'react-router-dom'

interface AdminPanelProps extends RouteComponentProps<any> {}

const AdminPanel: React.FC<AdminPanelProps> = ({ history }) => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      history.push('/login')
    }
  }, [userInfo, history])

  return (
    <AdminContainer>
      <SendButton variant='primary' large fontLarge>
        <Link to='/admin/userlist'>User List</Link>
      </SendButton>
      <SendButton variant='secondary' large fontLarge>
        <Link to='/admin/blog/manage'>Article List</Link>
      </SendButton>
      <SendButton variant='danger' large fontLarge>
        <Link to='/profile'>Edit Admin Account</Link>
      </SendButton>
    </AdminContainer>
  )
}
export default AdminPanel
