import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
// import { useAppDispatch } from '../app/reduxHooks'
import { useDispatch } from 'react-redux'

// import { login, logout, sendUserId } from '../features/users/userSlice'
// import sendUserId from '../features/users/userSlice'
import FormContainer from '../components/FormContainer'
import { register } from '../features/users/userActions'
// import { login } from '../features/users/userActions'

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  // const dispatch: any = useAppDispatch()
  const dispatch: any = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  // const userInfo = { email, password }

  // const submitHandler = (e: any) => {
  //   e.preventDefault()
  //   dispatch(sendUserId(userInfo))
  // }
  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(register(name, email, password))
  }

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <h1>Register</h1>
          <Form.Group controlId='currentName'>
            <p>Enter your name:</p>
            <Form.Control
              type='name'
              placeholder='Enter your Name'
              value={password}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
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
    </FormContainer>
  )
}
export default Register
