import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import { store } from '../../app/store'
interface NewArticleInfo {
    _id?: string
    topline: string
    headline: string
    subtitle: string
    imgLink?: string
    author: string

}
// interface UserInfo2 {
//     id: string
//     name: string
//     email: string
//     password: string
//     isAdmin: boolean
//     token: string
// }
// interface UserData {
//     userInfo?: UserInfo2
//     loading?: boolean
// }

export const createArticle = createAsyncThunk(
    'article/createArticle',


    // async (newArticleInfo: NewArticleInfo, { rejectWithValue }) => {
    async (newArticleInfo: NewArticleInfo, thunkAPI) => {

        const { topline, headline, subtitle, imgLink, author } = newArticleInfo

        try {

            const state: any = thunkAPI.getState()
            const userInfo = state.user.userInfo

            const config = {
                headers: {
                    'Content-Type': 'application/json',

                    Authorization: `Bearer ${userInfo.token}`,
                },
            }

            const { data } = await axios.post(
                '/api/articles/',
                { topline, headline, subtitle, imgLink, author },
                config
            )
            return data

        } catch (error: any) {


            return error
            // return rejectWithValue(error.data)

        }
    }
)
export const editArticle = createAsyncThunk(
    'article/editArticle',

    async (article: NewArticleInfo, thunkAPI) => {



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
                `/api/articles/${article._id}`,
                article,
                config
            )
            return data

        } catch (error: any) {


            return error
            // return rejectWithValue(error.data)

        }
    }
)
export const getArticles = createAsyncThunk(
    'article/getArticles',
    async () => {

        try {

            const { data } = await axios.get(
                `/api/articles/`
            )

            return data

        } catch (error: any) {

            return error
        }
    }
)
export const getArticleById = createAsyncThunk(
    'article/getArticleById',
    async (id: string) => {

        try {

            const { data } = await axios.get(
                `/api/articles/${id}`
            )

            return data

        } catch (error: any) {

            return error
        }
    }
)
export const deleteArticle = createAsyncThunk(
    'article/deleteArticle',
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
                `/api/articles/${id}`,
                config
            )

            return data

        } catch (error: any) {

            return error
        }
    }
)


const articleSlice = createSlice({
    name: 'blogArticles',
    initialState: {
        articles: [],
        articleInfo: {},
        articleById: {
            _id: '',
            topline: '',
            headline: '',
            subtitle: '',
            author: '',
            imgLink: '',
        },
        articleCreated: {},
        loading: false,
        error: {},
    },
    reducers: {


    },

    extraReducers: (builder) => {

        builder.addCase(createArticle.pending, (state, action) => {
            state.loading = true

        })
        builder.addCase(createArticle.fulfilled, (state, action) => {
            state.loading = false
            state.articleCreated = action.payload
            state.error = action.payload.message
        })
        builder.addCase(createArticle.rejected, (state, action) => {
            state.loading = false

        })
        builder.addCase(getArticles.pending, (state, action) => {
            state.loading = true

        })
        builder.addCase(getArticles.fulfilled, (state, action) => {
            state.loading = false
            state.articles = action.payload
            state.error = action.payload.message
        })
        builder.addCase(getArticles.rejected, (state, action) => {
            state.loading = false

        })

        builder.addCase(deleteArticle.pending, (state, action) => {
            state.loading = true

        })
        builder.addCase(deleteArticle.fulfilled, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })
        builder.addCase(deleteArticle.rejected, (state, action) => {
            state.loading = false

        })
        builder.addCase(getArticleById.pending, (state, action) => {
            state.loading = true

        })
        builder.addCase(getArticleById.fulfilled, (state, action) => {
            state.loading = false
            state.articleById = action.payload
            state.error = action.payload.message
        })
        builder.addCase(getArticleById.rejected, (state, action) => {
            state.loading = false

        })

    },

})


// export const {  } = articleSlice.actions

export default articleSlice.reducer