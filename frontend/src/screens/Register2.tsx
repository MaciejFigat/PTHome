import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import { useAppDispatch } from '../app/reduxHooks'
// import { useDispatch } from 'react-redux'

// import { login, logout, sendUserId } from '../features/users/userSlice'
import createUser from '../features/users/userSlice'
import FormContainer from '../components/FormContainer'
// import { register } from '../features/users/userActions'

interface Register2Props {}

const Register2: React.FC<Register2Props> = () => {
  const dispatch: any = useAppDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const newUserInfo = { name, email, password }

  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(createUser(newUserInfo))
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
              value={name}
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
        <button type='submit'>Register</button>
      </Form>
    </FormContainer>
  )
}
export default Register2
