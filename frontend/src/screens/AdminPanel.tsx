import React from 'react'
import { Link } from 'react-router-dom'
import { SendButton } from '../components/ArticleTable/ArticleForm.styled'
import { AdminContainer } from '../components/ArticleTable/ArticleTable.styled'
import useRedirectListener from '../hooks/useRedirectListener'

interface AdminPanelProps {}

const AdminPanel: React.FC<AdminPanelProps> = () => {
  // hook used to redirect to /login when not logged in
  useRedirectListener()

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
