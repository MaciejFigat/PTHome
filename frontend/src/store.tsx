import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// import {

// } from './reducers/pomodoroReducers'

const reducer = combineReducers({
  //   userLogin: userLoginReducer,
  //   userRegister: userRegisterReducer,
})

// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null

// export const pomodoroInfoFromStorage = localStorage.getItem('pomodoros')
//   ? JSON.parse(localStorage.getItem('pomodoros'))
//   : { savedPomodoroSeconds: 5, savedRestSeconds: 1 }

const initialState = {
  //   userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store