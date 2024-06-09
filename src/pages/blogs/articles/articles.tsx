import { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { FaRegClock } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { fetchCurrentArticleAxios } from 'src/axios-action'
import { FormCreatedUpdateComp } from 'src/components'
import { useAppDispatch, useAppSelector } from 'src/redux'
import { parserText, timeFormatter } from 'src/utils'

export const Articles = () => {
    const { articleId } = useParams()
    const dispatch = useAppDispatch()
    const article = useAppSelector(state => state.currentArticle)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        dispatch(fetchCurrentArticleAxios(`/${articleId}`))
    }, [dispatch, articleId])

    if (!article) {
        return <div>Article not found</div>
    }

    return (
        <Container>
            <Row className='text-center'>
                <Container>
                    <Row>
                        <Col>
                            <h1>{article.title}</h1>
                        </Col>
                        <Col>
                            <Button variant='primary' onClick={handleShow}>
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
                <div className='mb-2'>
                    <FaRegClock className='me-1' />
                    <small>{timeFormatter(article.createdAt, 'en-US')}</small>
                </div>
            </Row>
            <Row className='mb-2'>
                <img
                    src={article.image}
                    alt={article.title}
                    className='w-100'
                />
            </Row>
            <Row className='text-start'>
                <p>{parserText(article.content)}</p>
            </Row>
        </Container>
    )
}
