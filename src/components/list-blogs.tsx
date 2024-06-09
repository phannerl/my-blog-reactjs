import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux'
import { IArticle } from '../type.d'
import { parserText, timeFormatter } from '../utils'

const ListBlogsComp = () => {
    const currenArticles = useAppSelector(state => state.currentArticles)
    
    return (
        <ul className='list-unstyled w-100'>
            {currenArticles.map((article: IArticle) => {
                return (
                    <li
                        className='d-flex align-items-center mb-2'
                        key={article.id}
                    >
                        <Container>
                            <Row>
                                <Col>
                                    <Link
                                        to={`/blogs/articles/${article.id}`}
                                        className='page-link text-dark border-0 d-flex flex-column align-items-start'
                                    >
                                        <Card className='d-md-flex flex-md-row align-items-md-center border-0 w-100 card-constent'>
                                            <Card.Img
                                                src={article.image}
                                                className='d-md-block d-none'
                                                style={{ width: '100px' }}
                                            />
                                            <Card.Img
                                                src={article.image}
                                                className='d-md-none'
                                            />
                                            <Card.Body className='d-flex flex-column justify-content-start w-100'>
                                                <Card.Title className='text-start'>
                                                    {article.title}
                                                </Card.Title>
                                                <Card.Text className='text-start'>
                                                    {parserText(
                                                        article.description,
                                                    )}
                                                </Card.Text>
                                                <Card.Text className='text-start'>
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
