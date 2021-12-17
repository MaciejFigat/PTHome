import React, { useState, useEffect } from 'react'
import { UserInfo } from '../interfaces'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { logout, sendUserId } from '../features/users/userSlice'
import {
  Wrapper,
  Form,
  Input,
  Button,
  Title,
  LoginLink,
  LoginContainer,
} from '../styles/login'
import { useNavigate } from 'react-router-dom'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user: UserInfo = useAppSelector((state) => state.user.userInfo)
  const userInfo = { email, password }

  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(sendUserId(userInfo))
  }

  const logoutHandler = (e: any) => {
    e.preventDefault()

    dispatch(logout())
  }
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <LoginContainer>
      <Wrapper>
        <h3>Welcome back</h3>
        <Form onSubmit={submitHandler}>
          <Input
            type='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            type='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Button>Login</Button>
          <Title>
            Please feel free to{' '}
            <Link to='/register'>
              <LoginLink>&nbsp;register.</LoginLink>
            </Link>
          </Title>
        </Form>

        <Button onClick={logoutHandler}>Logout</Button>
      </Wrapper>
    </LoginContainer>
  )
}
export default Login
