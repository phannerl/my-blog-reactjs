import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import FormCreatedUpdateComp from "./form-created-updated";
import { useState } from "react";

interface HeaderArticleProps {
    title: string
}

const HeaderArticleComp = ({ title }: HeaderArticleProps) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
    <Container>
        <Row>
            <Col>
                <h1>{title}</h1>
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
    )
}

export default HeaderArticleComp
