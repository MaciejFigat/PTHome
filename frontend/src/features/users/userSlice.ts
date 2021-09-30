import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from 'axios'


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

// the thunk for posting the header - used for logging in


export const sendUserId = createAsyncThunk(
    'user/sendUser',

    async (userLogin: UserLogin, { rejectWithValue }) => {

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

            return data

        } catch (error: any) {

            // return thunkAPI.rejectWithError(error)
            return error
            // return rejectWithValue(error.data)

        }
    }
)

interface NewUserInfo {
    name: string
    email: string
    password: string
}

// Here the thunk for registering
export const createUser = createAsyncThunk(
    'user/registerUser',

    async (newUserInfo: NewUserInfo, { rejectWithValue }) => {

        const { name, email, password } = newUserInfo

        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post(
                '/api/users/',
                { name, email, password },
                config
            )
            return data

        } catch (error: any) {


            return error
            // return rejectWithValue(error.data)

        }
    }
)



const userSlice = createSlice({
    name: 'userLogin',
    initialState: {
        userInfo: {},
        loading: false,
        error: {},
    },
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload
            state.loading = false
            state.error = action.payload.error
        },
        register: (state, action: PayloadAction<string>) => {
            state.userInfo = action.payload
            state.error = action.payload
        },
        logout: (state) => {
            state.userInfo = {}
        },
    },

    extraReducers: (builder) => {
        builder.addCase(sendUserId.pending, (state, action) => {
            state.loading = true

        })
        builder.addCase(sendUserId.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        })
        builder.addCase(sendUserId.rejected, (state, action) => {
            state.loading = false
            // state.error = action.error
            // state.error = action.payload.error
        })

    },

})
// dispatch(fetchUserById(123)) 

export const { login, logout, register } = userSlice.actions
// export const { actions, reducer } = userSlice
export default userSlice.reducer

