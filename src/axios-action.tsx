import axios from 'axios'
import { toast } from 'sonner'
import { fetcher } from './api/fetch'
import {
    addArticle,
    editArticle,
    fetchArticlesPerPageSuccess,
    fetchArticlesSuccess,
    fetchCurrentArticleSuccess,
} from './redux/store/reducer'
import { IAddArticle, IArticle } from './type.d'

export const getAllArticles =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data: { search: string }) => async (dispatch: any) => {
        try {
            const response = await fetcher.get('/blogs', { params: data })
            dispatch(fetchArticlesSuccess(response?.data))
            toast.success('getAllArticles: success')
        } catch (error) {
            if(axios.isAxiosError(error)) {
                toast.error(`getAllArticles Error: ${error.message}: ${error.response?.data}`)
            } else {
                toast.error(`getAllArticles Error: ${(error as Error).message}`)
            }
        }
    }

export const getArticles =
    (data: {
        page: string
        limit: string
        sortBy: string
        order: string
        search: string
    }) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (dispatch: any) => {
        try {
            const response = await fetcher.get('/blogs', { params: data })
            dispatch(fetchArticlesPerPageSuccess(response?.data))
            toast.success('getArticles: success')
        } catch (error) {
            if(axios.isAxiosError(error)) {
                toast.error(`getArticles Error: ${error.message}: ${error.response?.data}`)
            } else {
                toast.error(`getArticles Error: ${(error as Error).message}`)
            }
        }
    }

export const fetchCurrentArticle =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (articleId: string) => async (dispatch: any) => {
        try {
            const response = await fetcher.get(`/blogs/${articleId}`)
            dispatch(fetchCurrentArticleSuccess(response?.data))
            toast.success('fetchCurrentArticle: success')
        } catch (error) {
            if(axios.isAxiosError(error)) {
                toast.error(`fetchCurrentArticle Error: ${error.message}: ${error.response?.data}`)
            } else {
                toast.error(`fetchCurrentArticle Error: ${(error as Error).message}`)
            }
        }
    }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const editArticleAxios = (data: IArticle) => async (dispatch: any) => {
    try {
        await fetcher.put(`/blogs/${data.id}`, data)
        dispatch(editArticle(data))
        toast.success('editArticle: success')
    } catch (error) {
        if(axios.isAxiosError(error)) {
            toast.error(`editArticle Error: ${error.message}: ${error.response?.data}`)
        } else {
            toast.error(`editArticle Error: ${(error as Error).message}`)
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addArticleAxios = (data: IAddArticle) => async (dispatch: any) => {
    try {
        await fetcher.post('/blogs', data)
        dispatch(addArticle(data))
        toast.success('addArticleAxios: success')
    } catch (error) {
        if(axios.isAxiosError(error)) {
            toast.error(`addArticleAxios Error: ${error.message}: ${error.response?.data}`)
        } else {
            toast.error(`addArticleAxios Error: ${(error as Error).message}`)
        }
    }
}
