import { Suspense, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { fetchArticlesAxios, fetchArticlesByPageAxios } from 'src/axios-action'
import {
    DropdownSortedComp,
    PaginationComp,
    SearchArticlesComp,
} from 'src/components'
import ListBlogs from 'src/components/list-blogs'
import Loading from 'src/components/loading'
import { useAppDispatch, useAppSelector } from 'src/redux'
import { sortParams } from 'src/stores'
import { paramsParser } from 'src/utils'

const Blogs = () => {
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
        <>
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
            <Suspense fallback={<Loading />}>
                <ListBlogs />
            </Suspense>
            <PaginationComp totalPages={totalPages} />
        </>
    )
}

export default Blogs;
