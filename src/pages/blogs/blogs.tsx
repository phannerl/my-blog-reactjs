import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux';
import {
    fetchArticles,
    fetchArticlesByPage,
} from '../../redux/store/fetchArticles';
import { Col, Container, Row } from 'react-bootstrap';
import { paramsParser } from '../../utils';
import { BlogsListComp, DropdownSortedComp, PaginationComp, SearchArticlesComp } from '../../components';
import { sortParams } from '../../stores';

export const Blogs = () => {
    const allArticles = useAppSelector((state) => state.articles);
    const totalPages = Math.ceil(
        allArticles.length / parseInt(import.meta.env.VITE_ITEMS_PER_PAGE),
    );

    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const { currentPage, limit, sortBy, order, search } = paramsParser(searchParams);

    useEffect(() => {
        dispatch(fetchArticles(`${import.meta.env.VITE_API_ARTICLES_URL}?search=${search}`));
    }, [search]);

    useEffect(() => {
        dispatch(
            fetchArticlesByPage(
                `${import.meta.env.VITE_API_ARTICLES_URL}?page=${currentPage}&limit=${limit}&sortBy=${sortBy}&order=${order}&search=${search}`,
            ),
        );
    }, [dispatch, currentPage, limit, sortBy, order, search]);

    return (
        <Container fluid="xs" className='w-100 d-flex flex-column align-items-center justify-content-center px-2'>
            <Row className='w-100'>
                <Col md={10} xs={8} className='mb-2'>
                    <SearchArticlesComp/>
                </Col>
                <Col md={2} xs={4}>
                    <DropdownSortedComp sortParams={sortParams}/>
                </Col>
            </Row>
            <BlogsListComp />
            <PaginationComp totalPages={totalPages} />
        </Container>
    );
};
