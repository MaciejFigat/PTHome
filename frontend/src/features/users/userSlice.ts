import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

// the thunk for posting the header
// interface UserInfo {
//     name: string
//     email: string
//     password: string
//     isAdmin: boolean
// }
// interface UserData {
//     name: string
//     email: string
//     password: string
//     isAdmin: boolean
//     token: string

// }
// interface ErrorMessage {
//     error: string
// }


const sendUserId = createAsyncThunk(
    'user/sendUser',

    async (userInfo: any, thunkAPI) => {

        try {

            const { email, password } = userInfo
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

            localStorage.setItem('userInfo', JSON.stringify(data))
            return data

        } catch (error: any) {

            return error

            // error.response && error.response.data.message
            //     ? error.response.data.message
            //     : error.message,

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

