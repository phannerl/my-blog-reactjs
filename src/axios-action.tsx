import { fetcher } from './api/fetch'
import {
    addArticle,
    editArticle,
    fetchArticlesByPageSuccess,
    fetchArticlesSuccess,
    fetchCurrentArticleSuccess,
} from './redux/store/reducer'
import { IAddArticle, IArticle } from './type.d'

export const getAllArticles =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data: { search: string }) => async (dispatch: any) => {
        const response = await fetcher.get('/blogs', { params: data })
        if (response.status === 200) {
            dispatch(fetchArticlesSuccess(response.data))
        } else {
            console.log('fetchArticlesAxios: failed')
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
        const response = await fetcher.get('/blogs', { params: data })
        if (response.status === 200) {
            dispatch(fetchArticlesByPageSuccess(response.data))
        } else {
            console.log('fetchArticlesAxios: failed')
        }
    }

export const fetchCurrentArticleAxios =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (articleId: string) => async (dispatch: any) => {
        const response = await fetcher.get(`/blogs/${articleId}`)
        if (response.status === 200) {
            dispatch(fetchCurrentArticleSuccess(response.data))
        } else {
            console.log('fetchCurrentArticleSuccess: failed')
        }
    }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const editArticleAxios = (data: IArticle) => async (dispatch: any) => {
    const response = await fetcher.put(`/blogs/${data.id}`, data)
    if (response.status === 200) {
        dispatch(editArticle(data))
    } else {
        console.log('editArticleAxios: failed')
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addArticleAxios = (data: IAddArticle) => async (dispatch: any) => {
    const response = await fetcher.post('/blogs', data)
    if (response.status === 201) {
        dispatch(addArticle(data))
    } else {
        console.log('addArticleAxios: failed')
    }
}
