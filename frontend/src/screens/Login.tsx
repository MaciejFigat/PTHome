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
    resetPasswordToken: '408228422f1fb4c30f34272ebd7f89000f286967',
  }
  const activationToken = {
    confirmationCode: '51816e6778d2823b351e44b041ef22e6d5962c32',
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
            autoComplete='email'
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            type='password'
            name='password'
            autoComplete='current-password'
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
