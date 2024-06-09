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
    <Container fluid='sm'>
        <Row>
            <Col className="col-sm-8">
                <h1>{title}</h1>
            </Col>
            <Col className="col-sm-4">
                <Button variant='primary' onClick={handleShow}>
                    Edit
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
