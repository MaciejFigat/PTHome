import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const postUser = createAsyncThunk(
    'users/postUser', async (_, thunkAPI) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post(
                '/api/users/login',
                //@ts-ignore
                { email, password },
                config
            )
            return data

        } catch (error: any) {
            return thunkAPI.rejectWithValue({
                error: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            })
        }
    })

const userInfoFromStorage = localStorage.getItem('userInfo')
    //@ts-ignore
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState: {
        userInfo: userInfoFromStorage,
        loading: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postUser.pending, (state) => {
            state.userInfo = {}
            state.loading = 'loading'
        })
        builder.addCase(
            postUser.fulfilled, (state, { payload }) => {
                state.userInfo = payload
                state.loading = 'success'
            }
        )
        builder.addCase(
            postUser.rejected, (state, action) => {
                state.loading = 'error'
                state.userInfo = action.error.message
            })
    }
})




export const { login } = userLoginSlice.actions
export default userLoginSlice.reducer