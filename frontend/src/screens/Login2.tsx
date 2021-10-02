import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import { useAppDispatch } from '../app/reduxHooks'
import { logout, sendUserId } from '../features/users/userSlice'
import FormContainer from '../components/FormContainer'
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
  IconsContainer,
} from '../styles/login'

interface LoginProps {}

const Login2: React.FC<LoginProps> = () => {
  const dispatch: any = useAppDispatch()

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
    <>
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer>
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
        </InputContainer>
        <ButtonContainer>
          <button>Sign up</button>
        </ButtonContainer>
        <LoginWith>OR LOGIN WITH</LoginWith>

        <IconsContainer></IconsContainer>
        <h3>Forgot Password ?</h3>
      </MainContainer>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email'>
            <h1>Log in - redux toolkit</h1>
            <Form.Label>Enter your email:</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='currentPassword'>
            <p>Enter your password:</p>
            <Form.Control
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <button type='submit'>Login</button>
        </Form>
        <Row className='py-3'>
          <Col>
            New user?{' '}
            <Link
              //   to={redirect ? `/register?redirect=${redirect}` : '/register'}
              to='/'
            >
              Register
            </Link>
            <button onClick={logoutHandler}>LOGOUT</button>
          </Col>
        </Row>
      </FormContainer>
    </>
  )
}
export default Login2
