import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { loginVanilla, logout } from '../features/users/userActions'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch: any = useDispatch()

  const [email, setEmail] = useState('admin@somethin.com')
  const [password, setPassword] = useState('123456')

  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(loginVanilla(email, password))
  }

  const logoutHandler = (e: any) => {
    e.preventDefault()

    dispatch(logout())
  }
  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <h1>Log in</h1>
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
  )
}
export default Login
