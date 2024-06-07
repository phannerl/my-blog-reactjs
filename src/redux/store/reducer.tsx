import { createSlice } from '@reduxjs/toolkit';
import { ArticleState, IArticle } from '../../type.d';
import { removeDiacritics } from '../../utils';

const initialState: ArticleState = {
    articles: [],
    articlesSearch: [],
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
        },
        addArticles: (state, action) => {
            for (const article of action.payload) {
                if (!state.articles.find((a) => a.id === article.id)) {
                    state.articles.push(article);
                }
            }
        },
        removeArticle: (state, action) => {
            state.articles = state.articles.filter(
                (article) => article.id !== action.payload.id,
            );
        },
        removeAllArticles: (state) => {
            state.articles = [];
        },
        searchArticles: (state, action) => {
            if (action.payload === '') {
                state.articlesSearch = state.articles;
                return;
            }
            const searchResult = state.articles.filter((article) =>
                removeDiacritics(article.title.toLowerCase()).includes(
                    removeDiacritics(action.payload).toLowerCase(),
                ),
            );
            state.articlesSearch = searchResult;
        },
        sortedArticlesByDate: (state, action) => {
            const sortedArticles = [...state.articles].sort((a, b) => {
                if (a.createdAt > b.createdAt) {
                    return action.payload ? -1 : 1;
                }
                if (a.createdAt < b.createdAt) {
                    return action.payload ? 1 : -1;
                }
                return 0;
            });
            state.articles = sortedArticles;
        },
    },
});

export default ArticleSlice.reducer;
// eslint-disable-next-line react-refresh/only-export-components
export const {
    addArticle,
    addArticles,
    removeArticle,
    removeAllArticles,
    searchArticles,
    sortedArticlesByDate,
} = ArticleSlice.actions;
