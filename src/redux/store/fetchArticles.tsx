import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk(
    'article/fetchData',
    async (url: string) => {
        const response = await fetch(url);
        return response.json();
    },
);