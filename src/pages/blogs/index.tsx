import { fetchArticlesAxios, fetchArticlesByPageAxios } from '@/axios-action'
import { GroupFeatures, ListBlogsComp, PaginationComp } from '@/components'
import { useAppDispatch, useAppSelector } from '@/redux'
import { paramsParser } from '@/utils'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'


const Blogs = () => {
    const allArticles = useAppSelector(state => state.articles)
    const totalPages = Math.ceil(
        allArticles.length / parseInt(import.meta.env.VITE_ITEMS_PER_PAGE),
    )
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const { currentPage, limit, sortBy, order, search, fullParamsUrlNoPage } =
        paramsParser(searchParams)

    useEffect(() => {
        dispatch(fetchArticlesAxios(`?search=${search}`))
    }, [dispatch, search])

    useEffect(() => {
        dispatch(
            fetchArticlesByPageAxios( `?page=${currentPage}&${fullParamsUrlNoPage}`),
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, currentPage, limit, sortBy, order, search])


    return (
        <>
            <GroupFeatures />
            <ListBlogsComp />
            <PaginationComp totalPages={totalPages} />
        </>
    )
}

export default Blogs
