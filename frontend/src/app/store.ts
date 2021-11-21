import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice'
import articleReducer from '../features/articles/articleSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


