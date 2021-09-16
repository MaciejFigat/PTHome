import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

// the thunk for posting the header
interface UserInfo {
    name: string
    email: string
    password: string
    isAdmin: boolean
}
interface UserData {
    name: string
    email: string
    password: string
    isAdmin: boolean
    token: string

}
interface ErrorMessage {
    error: string
}
//@ts-ignore
// { password, email },

const sendUserId = createAsyncThunk < data: UserData, userInfo: UserInfo, { rejectValue: ErrorMessage } > (
    'user/sendUser',

    async (userInfo, thunkAPI) => {
        try {

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



            payload: data,


                localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error: any) {


            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
                
            }
    }
)



const userSlice = createSlice({
    name: 'userLogin',
    initialState: {
        userInfo: {},
        loading: false,
        error: {}
    },
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload
            // state.loading = false
            state.error = action.payload
        },
        register: (state, action) => {
            state.userInfo = action.payload
            // state.loading = false
            state.error = action.payload
        }
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [sendUserId.fulfilled]: (state, action) => {
            state.userInfo = action.payload
        },

    }
})
// dispatch(fetchUserById(123)) 

export const { login, register } = userSlice.actions
// export const { actions, reducer } = userSlice
export default userSlice.reducer

