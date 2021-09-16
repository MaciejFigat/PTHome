import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

// the thunk for posting the header
// interface UserInfo {
//     name: string
//     email: string
//     password: string
//     isAdmin: boolean
// }
interface UserLogin {
    email: string
    password: string
}
// interface ErrorMessage {
//     error: string
// }


const sendUserId = createAsyncThunk(
    'user/sendUser',

    async (userLogin: UserLogin, thunkAPI) => {

        try {

            const { email, password } = userLogin
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
            return thunkApi.data

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

    extraReducers: (builder) => {
        builder.addCase(sendUserId.fulfilled, (state, { payload }) => {
            // ->HERE
            // state.entities[payload.id] = payload
        })
        builder.addCase(sendUserId.rejected, (state, action) => {
            if (action.payload) {
                // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.

                // ->HERE

                // state.error = action.payload.errorMessage
            } else {
                state.error = action.error
            }
        })
    },

})
// dispatch(fetchUserById(123)) 

export const { login, register } = userSlice.actions
// export const { actions, reducer } = userSlice
export default userSlice.reducer

