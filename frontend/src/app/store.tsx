import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
// import userReducer from '../features/users/userSlice'
import {
  userLoginReducer,
  userRegisterReducer,
} from '../features/users/userReducers'
import { apiSlice } from '../features/dogs/dogsApiSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false
// })
