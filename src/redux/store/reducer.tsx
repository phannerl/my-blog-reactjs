import { createSlice } from '@reduxjs/toolkit'
import { ArticleState, IArticle } from 'src/type.d'

const initialState: ArticleState = {
    articles: [],
    currentArticles: [],
    currentArticle: null,
}

export const ArticleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        addArticle: (state, action) => {
            const newArticle: IArticle = {
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                image: action.payload.img,
                description: action.payload.description,
                createdAt: action.payload.createdAt,
            }
            state.articles.push(newArticle)
        },
        editArticle: (state, action) => {
            const article = state.currentArticle
            if (article) {
                article.title = action.payload.title
                article.content = action.payload.content
                article.image = action.payload.img
                article.description = action.payload.description
            }
        },
        fetchArticlesSuccess: (state, action) => {
            state.articles = action.payload
        },
        fetchArticlesByPageSuccess: (state, action) => {
            state.currentArticles = action.payload
        },
        fetchCurrentArticleSuccess: (state, action) => {
            state.currentArticle = action.payload
        }
    }
})

export default ArticleSlice.reducer
// eslint-disable-next-line react-refresh/only-export-components
export const { addArticle, editArticle, fetchArticlesSuccess, fetchArticlesByPageSuccess, fetchCurrentArticleSuccess } =
    ArticleSlice.actions
