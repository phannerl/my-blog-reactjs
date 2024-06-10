import { Col, Container, Row } from "react-bootstrap"
import SearchArticlesComp from "./search-articles"
import { DropdownSortedComp, ModalFormsComp } from "."
import { sortParams } from "@/stores"

const GroupFeatures = () => {
    
    return (
        <Row className="w-100">
            <div className='d-flex justify-content-end gap-2 align-items-center mb-2'>
                <SearchArticlesComp className='d-flex justify-content-center' />
                <DropdownSortedComp sortParams={sortParams} />
                <ModalFormsComp articleId={undefined} />
            </div>
        </Row>
    )
}

export default GroupFeatures;
