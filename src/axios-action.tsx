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
            toast.success('fetchArticlesSuccess: success')
        } catch (error) {
            toast.error(`fetchArticlesSuccess Error: ${error.message}: ${error.response.data}`)
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
            toast.success('fetchArticlesPerPageSuccess: success')
        } catch (error) {
            toast.error(`fetchArticlesPerPageSuccess Error: ${error.message}: ${error.response.data}`)
        }
    }

export const fetchCurrentArticleAxios =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (articleId: string) => async (dispatch: any) => {
        try {
            const response = await fetcher.get(`/blogs/${articleId}`)
            dispatch(fetchCurrentArticleSuccess(response?.data))
            toast.success('fetchCurrentArticleSuccess: success')
        } catch (error) {
            toast.error(`fetchCurrentArticleSuccess Error: ${error.message}: ${error.response.data}`)
        }
    }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const editArticleAxios = (data: IArticle) => async (dispatch: any) => {
    try {
        await fetcher.put(`/blogs/${data.id}`, data)
        dispatch(editArticle(data))
        toast.success('editArticleAxios: success')
    } catch (error) {
        toast.error(`editArticleAxios Error: ${error.message}: ${error.response.data}`)
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addArticleAxios = (data: IAddArticle) => async (dispatch: any) => {
    try {
        await fetcher.post('/blogs', data)
        dispatch(addArticle(data))
        toast.success('addArticleAxios: success')
    } catch (error) {
        toast.error(`addArticleAxios Error: ${error.message}: ${error.response.data}`)
    }
}
