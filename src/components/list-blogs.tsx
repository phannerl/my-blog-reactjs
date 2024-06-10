import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux'
import { IArticle } from '../type.d'
import { paramsParser, parserText, timeFormatter } from '../utils'
import { useEffect } from 'react'
import { getAllArticles, getArticles } from '@/axios-action'

const ListBlogsComp = () => {
    const currenArticles = useAppSelector(state => state.currentArticles)
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const { currentPage, limit, sortBy, order, search } =
        paramsParser(searchParams)

    useEffect(() => {
        dispatch(getAllArticles({ search }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    useEffect(() => {
        dispatch(
            getArticles({ page: currentPage, limit, sortBy, order, search }),
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, currentPage, limit, sortBy, order, search])

    return (
        <ul className='list-unstyled w-100'>
            {currenArticles.map((article: IArticle) => {
                return (
                    <li
                        className='d-flex align-items-center mb-4'
                        key={article.id}
                    >
                        <Container>
                            <Row>
                                <Col>
                                    <Link
                                        to={`/blogs/articles/${article.id}`}
                                        className='page-link text-dark border-0 d-flex flex-column'
                                    >
                                        <Card className='d-md-flex flex-md-row align-items-md-stretch border-0 w-100 card-constent'>
                                            <Card.Img
                                                src={article.image}
                                                className='card-image'
                                            />
                                            <Card.Body className='d-flex flex-column justify-content-between card-body'>
                                                <div>
                                                    <Card.Title className='text-start'>
                                                        {article.title}
                                                    </Card.Title>
                                                    <Card.Text className='card-description text-start'>
                                                        {parserText(
                                                            article.description,
                                                        )}
                                                    </Card.Text>
                                                </div>

                                                <Card.Text className='text-start text-secondary'>
                                                    {timeFormatter(
                                                        article.createdAt,
                                                        'en-US',
                                                    )}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </li>
                )
            })}
        </ul>
    )
}

export default ListBlogsComp
