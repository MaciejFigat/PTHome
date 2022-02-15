import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/reduxHooks'
import {
  logout,
  sendUserId,
  testActivateUser,
  testResetPassword,
} from '../features/users/userSlice'
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
import { sendEmailToResetPassword } from '../features/users/userSlice'
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
  const userEmail = { email }

  const resetPasswordHandler = (e: any) => {
    e.preventDefault()
    dispatch(sendEmailToResetPassword(userEmail))
    console.log(email)
  }
  const userToken = {
    resetPasswordToken: 'e4cce7334f1776b91b330bb6731f2e3bfee33ccb',
  }
  const activationToken = {
    confirmationCode: '6576c76d847bbe489784967a8e6b6ce2f1be6dfb',
  }
  const testHandler = (e: any) => {
    e.preventDefault()
    dispatch(testResetPassword(userToken))
  }
  const activateHandler = (e: any) => {
    e.preventDefault()
    dispatch(testActivateUser(activationToken))
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
          <Title>
            Forgot the password - please type the email and click
            <LoginLink onClick={resetPasswordHandler}>
              reset password.
            </LoginLink>
          </Title>
          <Title>
            test it
            <LoginLink onClick={testHandler}>test</LoginLink>
          </Title>
          <Title>
            testing testActivateUser
            <LoginLink onClick={activateHandler}>test</LoginLink>
          </Title>
        </Form>

        <Button onClick={logoutHandler}>Logout</Button>
      </Wrapper>
    </LoginContainer>
  )
}
export default Login
