import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk(
    'article/fetchData',
    async (url: string) => {
        const response = await fetch(url);
        return response.json();
    },
);

export const fetchArticlesByPage = createAsyncThunk(
    'article/fetchDataByPage',
    async (url: string) => {
        const response = await fetch(url);
        return response.json();
    },
);

export const fetchCurrentArticle = createAsyncThunk(
    'article/fetchCurrentArticle',
    async (url: string) => {
        const response = await fetch(url);
        return response.json();
    },
);
