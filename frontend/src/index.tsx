import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import smoothScrollPolyfill from 'smoothscroll-polyfill'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'

smoothScrollPolyfill.polyfill()

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

reportWebVitals()
