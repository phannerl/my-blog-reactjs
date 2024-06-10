import axiosInstance from './axios-instance'
import {
    addArticle,
    editArticle,
    fetchArticlesByPageSuccess,
    fetchArticlesSuccess,
    fetchCurrentArticleSuccess,
} from './redux/store/reducer'
import { IAddArticle, IArticle } from './type.d';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchArticlesAxios = (search: string) => async (dispatch: any) => {
    const response = await axiosInstance.get(search)
    console.log('fetchArticlesAxios: success', response.status)
    if (response.status === 200) {
        dispatch(fetchArticlesSuccess(response.data))
    } else {
        console.log('fetchArticlesAxios: failed')
    }
}

export const fetchArticlesByPageAxios =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (search: string) => async (dispatch: any) => {
        const response = await axiosInstance.get(search)
        if (response.status === 200) {
            dispatch(fetchArticlesByPageSuccess(response.data))
        } else {
            console.log('fetchArticlesByPageAxios: failed')
        }
    }

export const fetchCurrentArticleAxios =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (search: string) => async (dispatch: any) => {
        const response = await axiosInstance.get(search)
        if (response.status === 200) {
            dispatch(fetchCurrentArticleSuccess(response.data))
        } else {
            console.log('fetchCurrentArticleSuccess: failed')
        }
    }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const editArticleAxios = (data: IArticle) => async (dispatch: any) => {
    const response = await axiosInstance.put(`/${data.id}`, data)
    if (response.status === 200) {
        dispatch(editArticle(data))
    } else {
        console.log('editArticleAxios: failed')
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addArticleAxios = (data: IAddArticle) => async (dispatch: any) => {
    const response = await axiosInstance.post('/', data)
    if (response.status === 201) {
        dispatch(addArticle(data))
    } else {
        console.log('addArticleAxios: failed')
    }
}
