import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux';
import { IArticle } from '../../type.d';
import { parserText, timeFormatter } from '../../utils';
import './index.css';

const BlogsListComp = () => {
    const currenArticles = useAppSelector((state) => state.currentArticles);

    return (
        <ul className="list-unstyled w-100">
            {currenArticles.map((article: IArticle) => {
                return (
                    <li
                        className="d-flex align-items-center mb-2"
                        key={article.id}>
                        <Container>
                            <Row>
                                <Col>
                                    <Link
                                        to={`/blogs/articles?id=${article.id}`}
                                        className="page-link text-dark border-0 d-flex flex-column align-items-start">
                                        <Card className="card-constent w-100">
                                            <Card.Img
                                                src={article.image}
                                            />
                                            <Card.Body className='d-flex flex-column justify-content-start w-100'>
                                                <Card.Title className="text-start">
                                                    {article.title}
                                                </Card.Title>
                                                <Card.Text className="text-start">
                                                    {parserText(article.description )}
                                                </Card.Text>
                                                <Card.Text className="text-start">
                                                    {timeFormatter(article.createdAt, 'en-US')}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </li>
                );
            })}
        </ul>
    );
};

export default BlogsListComp;
