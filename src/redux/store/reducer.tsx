import { createSlice } from '@reduxjs/toolkit';
import { ArticleState, IArticle } from '../../type.d';
import {
    fetchArticles,
    fetchArticlesByPage,
    fetchCurrentArticle,
} from './fetchArticles';

const initialState: ArticleState = {
    articles: [],
    currentArticles: [],
    currentArticle: null,
};

export const ArticleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        addArticle: (state, action) => {
            const newArticle: IArticle = {
                id: Math.random().toString(),
                title: action.payload.title,
                content: action.payload.content,
                image: action.payload.img,
                description: action.payload.description,
                createdAt: action.payload.createdAt,
            };
            state.articles.push(newArticle);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, () => {
                console.log('fetchArticles: loading...');
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.articles = action.payload;
            })
            .addCase(fetchArticles.rejected, () => {})
            .addCase(fetchArticlesByPage.pending, () => {
                console.log('fetchArticlesByPage: loading...');
            })
            .addCase(fetchArticlesByPage.fulfilled, (state, action) => {
                state.currentArticles = action.payload;
            })
            .addCase(fetchArticlesByPage.rejected, () => {})
            .addCase(fetchCurrentArticle.pending, () => {
                console.log('fetchCurrentArticle: loading...');
            })
            .addCase(fetchCurrentArticle.fulfilled, (state, action) => {
                state.currentArticle = action.payload;
            })
            .addCase(fetchCurrentArticle.rejected, () => {})
    },
});

export default ArticleSlice.reducer;
// eslint-disable-next-line react-refresh/only-export-components
export const {
    addArticle,
} = ArticleSlice.actions;
