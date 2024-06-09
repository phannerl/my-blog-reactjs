import { useEffect, useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { fetchCurrentArticle } from '../../../redux/store/fetchArticles';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { parserText, timeFormatter } from '../../../utils/index';
import FormCreatedUpdateComp from '../../../components/formCreatedUpdate';

export const Articles = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const article = useAppSelector((state) => state.currentArticle);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(
            fetchCurrentArticle(
                `${import.meta.env.VITE_API_ARTICLES_URL}/${searchParams.get('id')}`,
            ),
        );
    }, [dispatch, searchParams]);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <Container>
            <Row className="text-center">
                <Container>
                    <Row>
                        <Col>
                            <h1>{article.title}</h1>
                        </Col>
                        <Col>
                            <Button variant="primary" onClick={handleShow}>
                                Launch demo modal
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit Article</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <FormCreatedUpdateComp />
                                </Modal.Body>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row>
                <div className="mb-2">
                    <FaRegClock className="me-1" />
                    <small>{timeFormatter(article.createdAt, 'en-US')}</small>
                </div>
            </Row>
            <Row className="mb-2">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-100"
                />
            </Row>
            <Row className="text-start">
                <p>{parserText(article.content)}</p>
            </Row>
        </Container>
    );
};
