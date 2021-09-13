import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
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
        register: (state, action) => {
            state.userInfo = action.payload
            state.loading = false
            state.error = action.payload
        }
    }
})


export const { login, register } = userSlice.actions
export default userSlice.reducer