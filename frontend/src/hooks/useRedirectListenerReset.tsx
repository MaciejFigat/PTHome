import { useEffect } from 'react'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import { useNavigate } from 'react-router-dom'

// this is for redirecting  away from login or register when user is logged in
const useRedirectResetListener = () => {
  let navigate = useNavigate()

  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      navigate('/profile')
    }
  }, [userInfo, navigate])
  return
}
export default useRedirectResetListener
