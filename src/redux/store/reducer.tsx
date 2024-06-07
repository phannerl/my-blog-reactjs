import { createSlice } from '@reduxjs/toolkit';
import { ArticleState, IArticle } from '../../type.d';

const initialState: ArticleState = {
    articles: [],
};

export const ArticleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        addArticle: (state, action) => {
            const newArticle: IArticle = {
                id: Math.random(),
                title: action.payload.title,
                content: action.payload.content,
                image: action.payload.img,
                description: action.payload.description,
                createdAt: action.payload.createdAt,
            };
            state.articles.push(newArticle);
        },
        addArticles: (state, action) => {
            state.articles = [...state.articles, ...action.payload];
            console.log('state.articles:', state.articles);
        },
        removeArticle: (state, action) => {
            state.articles = state.articles.filter(
                (article) => article.id !== action.payload.id,
            );
        },
        removeAllArticles: (state) => {
            state.articles = [];
        }
    },
});

export default ArticleSlice.reducer;
// eslint-disable-next-line react-refresh/only-export-components
export const { addArticle, addArticles, removeArticle, removeAllArticles } = ArticleSlice.actions;
