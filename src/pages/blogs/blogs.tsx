import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { paramsParser } from 'src/utils'
import {
    BlogsListComp,
    DropdownSortedComp,
    PaginationComp,
    SearchArticlesComp,
} from 'src/components'
import { sortParams } from 'src/stores'
import { useAppDispatch, useAppSelector } from 'src/redux'
import { fetchArticlesAxios, fetchArticlesByPageAxios } from 'src/axios-action'

export const Blogs = () => {
    const allArticles = useAppSelector(state => state.articles)
    const totalPages = Math.ceil(
        allArticles.length / parseInt(import.meta.env.VITE_ITEMS_PER_PAGE),
    )

    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const { currentPage, limit, sortBy, order, search, fullParamsUrlNoPage } =
        paramsParser(searchParams)

    useEffect(() => {
        dispatch(fetchArticlesAxios(`?search=${search}`))
    }, [dispatch, search])

    useEffect(() => {
        dispatch(
            fetchArticlesByPageAxios(
                `?page=${currentPage}&${fullParamsUrlNoPage}`,
            ),
        )
        setSearchParams({
            limit: limit.toString(),
            page: currentPage.toString(),
            sortBy,
            order,
            search,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, currentPage, limit, sortBy, order, search])

    return (
        <Container
            fluid='xs'
            className='w-100 d-flex flex-column align-items-center justify-content-center px-2'
        >
            <Row>
                <div className='d-flex align-items-center mb-2'>
                    <Container>
                        <Row>
                            <Col md={10} xs={8} className='mb-2'>
                                <SearchArticlesComp className='d-flex justify-content-center' />
                            </Col>
                            <Col md={2} xs={4}>
                                <DropdownSortedComp sortParams={sortParams} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Row>
            <BlogsListComp />
            <PaginationComp totalPages={totalPages} />
        </Container>
    )
}
