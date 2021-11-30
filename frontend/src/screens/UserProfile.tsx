import React from 'react'
import UserData from '../components/UserData/UserData'

interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = ({}) => {
  return (
    <div>
      UserProfile
      <UserData />
    </div>
  )
}
export default UserProfile
