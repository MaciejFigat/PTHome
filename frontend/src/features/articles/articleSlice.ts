import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

interface NewArticleInfo {
    topline: string
    headline: string
    subtitle: string
    imgLink?: string
    author: string

}

export const createArticle = createAsyncThunk(
    'article/createArticle',


    // async (newArticleInfo: NewArticleInfo, { rejectWithValue }) => {
    async (newArticleInfo: NewArticleInfo) => {

        const { topline, headline, subtitle, imgLink, author } = newArticleInfo

        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json',
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


const articleSlice = createSlice({
    name: 'blogArticles',
    initialState: {
        articleInfo: {},
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
            state.articleInfo = action.payload
            state.error = action.payload.message
        })
        builder.addCase(createArticle.rejected, (state, action) => {
            state.loading = false

        })

    },

})


// export const {  } = articleSlice.actions

export default articleSlice.reducer