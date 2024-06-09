import axiosInstance from './axios-instance'
import {
    fetchArticlesByPageSuccess,
    fetchArticlesSuccess,
    fetchCurrentArticleSuccess,
} from './redux/store/reducer'

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
