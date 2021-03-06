import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import smoothScrollPolyfill from 'smoothscroll-polyfill'
import { Provider } from 'react-redux'
import { store } from './app/store'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'

// smoothScrollPolyfill.polyfill()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
