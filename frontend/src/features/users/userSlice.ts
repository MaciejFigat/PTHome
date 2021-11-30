import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import axios from 'axios'


interface UserInfo {
    name?: string
    email?: string
    password?: string
    isAdmin?: boolean
}
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
// to update the profile by the user
export const updateUserProfile = createAsyncThunk(
    'user/updateUser',
    async (updatedUserInfo: UserInfo, thunkAPI) => {

        const { name, email, password } = updatedUserInfo

        try {
            const state: any = thunkAPI.getState()
            const userInfo = state.user.userInfo
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }

            const { data } = await axios.put(
                '/api/users/profile',
                { name, email, password },
                config
            )
            return data

        } catch (error: any) {
            return error

        }
    }
)

export const getUsers = createAsyncThunk(
    'user/getUsers',
    // x- below is nothing, just a temporary solution so thunkAPI is recognized as a parameter
    async (x: any, thunkAPI) => {
        try {
            const state: any = thunkAPI.getState()
            const userInfo = state.user.userInfo
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }

            const { data } = await axios.get(
                `/api/users/`, config
            )
            return data

        } catch (error: any) {
            return error
        }
    }
)
export const deleteUser = createAsyncThunk(
    'user/deleteUser',

    async (id: string, thunkAPI) => {
        try {
            const state: any = thunkAPI.getState()
            const userInfo = state.user.userInfo
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }

            const { data } = await axios.delete(
                `/api/users/${id}`, config
            )
            return data

        } catch (error: any) {
            return error
        }
    }
)

const userSlice = createSlice({
    name: 'userLogin',
    initialState: {
        userInfo: {},
        loading: false,
        error: {},
        allUsers: [],
    },
    reducers: {

        logout: (state) => {
            state.userInfo = {}
            state.error = {}

        },
    },

    extraReducers: (builder) => {
        builder.addCase(sendUserId.pending, (state, action) => {
            state.loading = true

        })
        builder.addCase(sendUserId.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = (action.payload.name !== 'Error') && { id: action.payload._id, name: action.payload.name, email: action.payload.email, isAdmin: action.payload.isAdmin, token: action.payload.token }
            state.error = action.payload.message

        })
        builder.addCase(sendUserId.rejected, (state, action) => {
            state.loading = false

        })
        builder.addCase(createUser.pending, (state, action) => {
            state.loading = true

        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
            state.error = action.payload.message
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false

        })
        builder.addCase(getUsers.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false
            state.allUsers = action.payload
            state.error = action.payload.message
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false

        })
        builder.addCase(updateUserProfile.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updateUserProfile.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
            state.error = action.payload.message
        })
        builder.addCase(updateUserProfile.rejected, (state, action) => {
            state.loading = false

        })
        builder.addCase(deleteUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false

        })

    },

})


export const { logout } = userSlice.actions
// export const { actions, reducer } = userSlice
export default userSlice.reducer

