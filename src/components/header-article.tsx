import { Col, Container, Row } from "react-bootstrap";
import { ModalFormsComp } from ".";
import { useParams } from "react-router-dom";

interface HeaderArticleProps {
    title: string
}

const HeaderArticleComp = ({ title }: HeaderArticleProps) => {
    const {articleId} = useParams()
    return (
    <Container>
        <Row className="flex-column flex-md-row align-items-md-center">
            <Col className="col-md-10">
                <h1>{title}</h1>
            </Col>
            <Col className="col-md-2">
                <ModalFormsComp articleId={articleId}/>
            </Col>
        </Row>
    </Container>
    )
}

export default HeaderArticleComp
