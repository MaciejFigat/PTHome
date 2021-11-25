import React from 'react'
import Nav from './components/menu/Nav/Nav'
import Home from './screens/Home'
import Contact from './screens/Contact'
import { GlobalStyle } from './styles/GlobalStyles'
import { Switch, Route, useLocation } from 'react-router-dom'
import FrontPageHeader from './components/menu/FrontPageHeader/FrontPageHeader'
import Shop from './screens/Shop'
import Exercise from './screens/Exercise'
import Blog from './screens/Blog'
import Login from './screens/Login'
import Register from './screens/Register'
import Footer from './components/Footer/Footer'
import ScrollTopHelper from './components/ScrollTopHelper'
import BlogArticle from './screens/BlogArticle'
import CreateArticle from './screens/CreateArticle'
function App() {
  const location = useLocation()

  return (
    <>
      <ScrollTopHelper />
      <GlobalStyle />
      <FrontPageHeader title='George B. trener personalny' />
      <Nav />
      <Switch location={location} key={location.key}>
        <Route exact path='/exercise' component={Exercise} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/blog/article/:id' component={BlogArticle} />
        <Route exact path='/admin/blog/create' component={CreateArticle} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
