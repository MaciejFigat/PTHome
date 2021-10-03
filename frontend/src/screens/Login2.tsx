import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/reduxHooks'
import { logout, sendUserId } from '../features/users/userSlice'
import { Wrapper, Form, Input, Button } from '../styles/login'

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
      <Wrapper>
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
        </Form>
        <Button>
          <Link to='/register'>Register !!!!!!</Link>
        </Button>
        <Button onClick={logoutHandler}>Logout</Button>
      </Wrapper>
    </>
  )
}
export default Login2
