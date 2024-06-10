import { Button, Modal } from 'react-bootstrap'
import { FormCreatedUpdateComp } from '.'
import { useState } from 'react'
import { FaEdit, FaPlusCircle } from 'react-icons/fa'
import { useAppSelector } from '@/redux'


const ModalFormsComp = ({articleId}: {articleId: string | undefined}) => {
    const articleCurrent = useAppSelector(state => state.currentArticle)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const type = articleId ? 'Edit' : 'Add'
    const typeIcon = articleId ? <FaEdit /> : <FaPlusCircle />


    return (
        <>
            <Button variant='primary' onClick={handleShow} className='d-none d-md-block'>
                {type}
            </Button>

            <Button variant='primary' onClick={handleShow} className='d-md-none'>
                {typeIcon}
            </Button>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{type} Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormCreatedUpdateComp articleCurrent={articleCurrent} closeModal={handleClose}/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalFormsComp;
