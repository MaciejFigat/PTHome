import React from 'react'
import Nav from './components/Nav'
import Home from './screens/Home'
import Contact from './screens/Contact'
import { GlobalStyle } from './styles/GlobalStyles'
import { Switch, Route, useLocation } from 'react-router-dom'
function App() {
  const location = useLocation()

  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.key}>
        <Route exact path='/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>
    </>
  )
}

export default App
