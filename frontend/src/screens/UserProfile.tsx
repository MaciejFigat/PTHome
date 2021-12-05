import React, { useState, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { updateUserProfile, getUserDetails } from '../features/users/userSlice'

import {
  EditFormContainer,
  EditForm,
  ContactField,
  ContactFieldContent,
  SendButton,
} from '../components/ArticleTable/UserEdit.styled'
import { AdminContainer } from '../components/ArticleTable/ArticleTable.styled'
interface UserProfileProps {}
interface UserInfo {
  _id?: string
  name?: string
  email?: string
  password?: string
  isAdmin?: boolean
}
const UserProfile: React.FC<UserProfileProps> = ({}) => {
  const dispatch: any = useAppDispatch()
  const user: UserInfo = useAppSelector((state) => state.user.userInfo)

  const { _id: id, name: nameState, email: emailState } = user

  const [name, setName] = useState(nameState)
  const [email, setEmail] = useState(emailState)
  const [password, setPassword] = useState('')

  const updatedUser = {
    _id: id,
    name: name,
    email: email,
    password: password,
  }

  const updateUserHandler = (e: any) => {
    e.preventDefault()
    dispatch(updateUserProfile(updatedUser))
  }
  useEffect(() => {
    // @ts-ignore
    dispatch(getUserDetails(id))
    setName(nameState)
    setEmail(emailState)
  }, [dispatch, nameState, emailState, id])
  return (
    <AdminContainer>
      <h1>Hello {nameState}!</h1> <h2>edit your account</h2>
      <EditFormContainer>
        <EditForm>
          <ContactField>
            <label>Name</label>
            <ContactFieldContent
              type='text'
              value={name}
              placeholder='Name'
              onChange={(e: any) => setName(e.target.value)}
            />
          </ContactField>
          <ContactField>
            <label>Email</label>
            <ContactFieldContent
              type='text'
              value={email}
              placeholder='Email'
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </ContactField>
          <ContactField>
            <label>New password</label>
            <ContactFieldContent
              type='text'
              value={password}
              placeholder='password'
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </ContactField>
        </EditForm>{' '}
      </EditFormContainer>
      <SendButton onClick={updateUserHandler} variant='success'>
        Save changes
      </SendButton>
    </AdminContainer>
  )
}
export default UserProfile
