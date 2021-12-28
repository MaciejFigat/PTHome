import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/reduxHooks'
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
import useRedirectLoggedListener from '../hooks/useRedirectListenerLogged'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useAppDispatch()

  useRedirectLoggedListener()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userInfo = { email, password }

  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(sendUserId(userInfo))
  }

  const logoutHandler = (e: any) => {
    e.preventDefault()
    dispatch(logout())
  }

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
