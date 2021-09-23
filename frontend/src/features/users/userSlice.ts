import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from 'axios'
// HERE 
// const updateUser = createAsyncThunk(
//     'user/update',
//     async (userData, { rejectWithValue }) => {
//       const { id, ...fields } = userData
//       try {
//         const response = await userAPI.updateById(id, fields)
//         return response.data.user
//       } catch (err) {
//         // Use `err.response.data` as `action.payload` for a `rejected` action,
//         // by explicitly returning it using the `rejectWithValue()` utility
//         return rejectWithValue(err.response.data)
//       }
//     }
//   )

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

        const { email, password } = userLogin
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

            localStorage.setItem('userInfo', JSON.stringify(data))
            // return thunkAPI.data
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
            state.loading = false
            state.error = action.payload
        },
        register: (state, action: PayloadAction<string>) => {
            state.userInfo = action.payload
            state.error = action.payload
        },
        logout: (state, action: PayloadAction) => {
            state.userInfo = {}
        },
    },

    extraReducers: (builder) => {
        builder.addCase(sendUserId.fulfilled, (state, { payload }) => {

            state.userInfo = payload
        })
        builder.addCase(sendUserId.rejected, (state, action) => {
            if (action.payload) {



                state.error = action.error
            } else {
                state.error = action.error
            }
        })
    },

})
// dispatch(fetchUserById(123)) 

export const { login, logout, register } = userSlice.actions
// export const { actions, reducer } = userSlice
export default userSlice.reducer

