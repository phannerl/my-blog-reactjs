import { Col, Container, Row } from "react-bootstrap"
import SearchArticlesComp from "./search-articles"
import { sortParams } from "src/stores"
import { DropdownSortedComp, ModalFormsComp } from "."

const GroupFeatures = () => {
    
    return (
        <Row>
            <div className='d-flex align-items-center mb-2'>
                <Container>
                    <Row>
                        <Col md={8} xs={6} className='mb-2'>
                            <SearchArticlesComp className='d-flex justify-content-center' />
                        </Col>
                        <Col md={3} xs={4}>
                            <DropdownSortedComp sortParams={sortParams} />
                        </Col>
                        <Col md={1} xs={2}>
                            <ModalFormsComp articleId={undefined} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Row>
    )
}

export default GroupFeatures;
