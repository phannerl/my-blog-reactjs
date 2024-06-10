import { sortParams } from "@/stores"
import { Row } from "react-bootstrap"
import { DropdownSortedComp, ModalFormsComp } from "."
import SearchArticlesComp from "./search-articles"

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
