import React, { useState, useEffect } from 'react'
import { UserInfo } from '../interfaces'
import { Wrapper, Form, Input, Button, LoginContainer } from '../styles/login'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { createUser } from '../features/users/userSlice'
import Toast from '../components/Toast/Toast'
import { useNavigate } from 'react-router-dom'

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const dispatch: any = useAppDispatch()
  let navigate = useNavigate()

  const user: UserInfo = useAppSelector((state) => state.user.userInfo)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const newUserInfo = { name, email, password }

  const submitHandler = (e: any) => {
    e.preventDefault()

    dispatch(createUser(newUserInfo))
  }
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      navigate('/')
    }
  }, [user, navigate])
  return (
    <LoginContainer>
      <Toast option='registerUser' />
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
    </LoginContainer>
  )
}
export default Register
