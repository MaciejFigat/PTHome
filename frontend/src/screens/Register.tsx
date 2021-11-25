import React, { useState } from 'react'
import { Wrapper, Form, Input, Button } from '../styles/login'
import { useAppDispatch } from '../app/reduxHooks'
import { createUser } from '../features/users/userSlice'

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
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
    <Wrapper>
      <h3>Welcome!</h3>
      <Form onSubmit={submitHandler}>
        <Input
          type='name'
          name='name'
          placeholder='Enter your name'
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
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
        <Button>Register</Button>
      </Form>
    </Wrapper>
  )
}
export default Register
