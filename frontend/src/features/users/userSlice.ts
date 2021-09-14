import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

// the thunk for posting the header

const fetchUserById = createAsyncThunk(
    'user/postingCredentials',
    async (userId, thunkAPI) => {
        const response = await userAPI.fetchById(userId)
        return response.data
    }
)



const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {},
        loading: false,
        error: {}
    },
    reducers: {
        loginUser: (state, action) => {
            state.userInfo = action.payload
            // state.loading = false
            state.error = action.payload
        },
        registerUser: (state, action) => {
            state.userInfo = action.payload
            // state.loading = false
            state.error = action.payload
        }
    }
})


export const { loginUser, registerUser } = userSlice.actions
// export const { actions, reducer } = userSlice
export default userSlice.reducer

// export const login: any = (email: string, password: string) => async (dispatch: any) => {

//     try {
//         dispatch(
//             actions.loginUser({ loading: true })
//         )
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         }

//         const { data } = await axios.post(
//             '/api/users/login',
//             { email, password },
//             config
//         )
//         dispatch(
//             actions.loginUser({ loading: false }),
//             { payload: data, }

//         )


//         localStorage.setItem('userInfo', JSON.stringify(data))
//     } catch (error: any) {
//         dispatch({

//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         },
//             actions.loginUser({ loading: false })
//         )
//     }
// }

