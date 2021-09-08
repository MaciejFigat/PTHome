import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from 'axios'
// interface CounterState {

//     userLogin: {}
// }
export interface User {
    name: string
    email: string
    password: string
    isAdmin?: boolean

}

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

interface UserState { userInfo: User | null }

const initialState: UserState = {

    userInfo: userInfoFromStorage
}

const userSlice = createSlice({
    name: 'userAction',
    initialState,
    reducers: {

        login(state, { payload: (email: string, password: string)
}: PayloadAction<{ userInfo: User }>) 
        
        {
             = (email: string, password: string) => async (dispatch: any) => {
        try {
            // dispatch({
            //     type: USER_LOGIN_REQUEST,
            // })
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post(
                '/api/users/login',
                { email, password },
                config
            )

            dispatch({
                // type: USER_LOGIN_SUCCESS,
                payload: data,
            })

            localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error: any) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
        }
    }
        },
// increment by fixed amount 
amountAdded(state, action: PayloadAction<number>) {
    state.value += action.payload
},
        // decrement
        // reset
    }
})

export const { incremented, amountAdded } = counterSlice.actions
export default counterSlice.reducer