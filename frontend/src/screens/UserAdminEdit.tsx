import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { getUserById, updateUser } from '../features/users/userSlice'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import UserData from '../components/UserData/UserData'
import {
  ResponsiveDiv,
  FormContainerDiv,
  ContactFormContainer,
  ContactFormStyled,
  ContactField,
  ContactFieldContent,
  SendButton,
} from '../components/ArticleTable/ArticleForm.styled'
interface UserAdminEditProps {
  history: RouteComponentProps
  match: any
}
interface UserInfo {
  _id?: string
  name?: string
  email?: string
  password?: string
  isAdmin?: boolean
}
const UserAdminEdit: React.FC<UserAdminEditProps> = ({ history, match }) => {
  const dispatch: any = useAppDispatch()

  const user: UserInfo = useAppSelector((state) => state.user.selectedUserInfo)

  const {
    _id: id,
    name: nameState,
    email: emailState,
    isAdmin: isAdminState,
  } = user

  const [name, setName] = useState(nameState)
  const [email, setEmail] = useState(emailState)
  const [isAdmin, setIsAdmin] = useState<boolean | undefined>(isAdminState)

  const updatedUser = {
    _id: id,
    name: name,
    email: email,
    isAdmin: isAdmin,
  }
  const editHandler = (e: any) => {
    e.preventDefault()
    dispatch(updateUser(updatedUser))
  }
  const fetchDataHandler = (e: any) => {
    e.preventDefault()
    dispatch(getUserById(match.params.id))
    setName(nameState)
    setEmail(emailState)
    setIsAdmin(isAdminState)
  }
  const adminGiveHandler = (e: any) => {
    e.preventDefault()
    setIsAdmin(true)
  }
  const adminRemoveHandler = (e: any) => {
    e.preventDefault()
    setIsAdmin(false)
  }

  useEffect(() => {
    dispatch(getUserById(match.params.id))
    setName(nameState)
    setEmail(emailState)
    setIsAdmin(isAdminState)
  }, [dispatch, match, nameState, emailState, isAdminState])

  return (
    <div>
      <h1>EDIT THIS USER</h1>

      <SendButton onClick={fetchDataHandler}>Fetch data</SendButton>
      <SendButton onClick={editHandler}>Save changes</SendButton>

      <FormContainerDiv>
        <ResponsiveDiv>
          {' '}
          <ContactFormContainer>
            <ContactFormStyled>
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
                  type='email'
                  value={email}
                  placeholder='Email'
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </ContactField>
              <ContactField>
                {isAdmin === true ? (
                  <p style={{ color: 'limegreen' }}>{user.name} is an Admin</p>
                ) : (
                  <p style={{ color: 'red' }}>{user.name} is not an Admin</p>
                )}

                <SendButton onClick={adminGiveHandler}>set as Admin</SendButton>
                <SendButton onClick={adminRemoveHandler}>
                  remove Admin rights
                </SendButton>
              </ContactField>
            </ContactFormStyled>{' '}
          </ContactFormContainer>
        </ResponsiveDiv>
      </FormContainerDiv>
      <UserData />
    </div>
  )
}
export default UserAdminEdit
