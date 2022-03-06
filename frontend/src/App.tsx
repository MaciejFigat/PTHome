import Nav from './components/menu/Nav/Nav'
import Home from './screens/Home'
import Contact from './screens/Contact'
import { GlobalStyle } from './styles/GlobalStyles'
import { Routes, Route, useLocation } from 'react-router-dom'
import FrontPageHeader from './components/menu/FrontPageHeader/FrontPageHeader'
import Shop from './screens/Shop'
import Exercise from './screens/Exercise'
import Blog from './screens/Blog'
import Login from './screens/Login'
import Register from './screens/Register'
import Footer from './components/Footer/Footer'
import ScrollTopHelper from './components/ScrollTopHelper'
import BlogArticle from './screens/BlogArticle'
import BlogAdmin from './screens/BlogAdmin'
import BlogAdminEdit from './screens/BlogAdminEdit'
import BlogAdminCreate from './screens/BlogAdminCreate'
import UserAdminEdit from './screens/UserAdminEdit'
import UserListAdmin from './screens/UserListAdmin'
import UserProfile from './screens/UserProfile'
import AdminPanel from './screens/AdminPanel'
import BlogAdminPreview from './screens/BlogAdminPreview'
import BlogAdminEditPreview from './screens/BlogAdminEditPreview'
import ResetPassword from './screens/ResetPassword'
import ConfirmAccount from './screens/ConfirmAccount'

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollTopHelper />
      <GlobalStyle />

      <FrontPageHeader title='Treningi na miarę' />
      <Nav />

      <Routes location={location} key={location.key}>
        <Route path='/exercise' element={<Exercise />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/confirmaccount' element={<ConfirmAccount />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/article/:id' element={<BlogArticle />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/admin/blog/manage' element={<BlogAdmin />} />
        <Route path='/admin/blog/create' element={<BlogAdminCreate />} />
        <Route
          path='/admin/blog/create/preview'
          element={<BlogAdminPreview />}
        />
        <Route
          path='/admin/blog/edit/preview'
          element={<BlogAdminEditPreview />}
        />
        <Route path='/admin/blog/:id' element={<BlogAdminEdit />} />
        <Route path='/admin/userlist' element={<UserListAdmin />} />
        <Route path='/admin/user/:id/edit' element={<UserAdminEdit />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
