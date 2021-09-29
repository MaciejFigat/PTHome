import { configureStore } from '@reduxjs/toolkit'
import { userLoginReducer, userRegisterReducer } from '../features/users/userReducers'
import userReducer from '../features/users/userSlice'

// const userInfoFromStorage = localStorage.getItem('userInfo')
//     //@ts-ignore
//     ? JSON.parse(localStorage.getItem('userInfo'))
//     : null


// const initialState = {
//     userLogin: { userInfo: userInfoFromStorage },
// }


export const store = configureStore({
    reducer: {
        user: userReducer,
        userLogin: userLoginReducer,
        userRegister: userRegisterReducer,
    },

})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store