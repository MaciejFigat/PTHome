import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import smoothScrollPolyfill from 'smoothscroll-polyfill'
import { Provider } from 'react-redux'
import store from './store'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'

smoothScrollPolyfill.polyfill()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
