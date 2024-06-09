import { Button, Form } from 'react-bootstrap'
import { useAppDispatch } from '../redux'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { addArticleAxios, editArticleAxios } from 'src/axios-action'
import { IArticle } from 'src/type.d'

interface IFormInputs {
    title: string
    description: string
    content: string
    image: string
}

const FormCreatedUpdateComp = ({
    articleCurrent,
    closeModal,
}: {
    articleCurrent?: IArticle | null,
    closeModal: () => void
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>()
    const [title, setTitle] = useState<string>(articleCurrent?.title ?? '')
    const [description, setDescription] = useState<string>(
        articleCurrent?.description ?? '',
    )
    const [content, setContent] = useState<string>(
        articleCurrent?.content ?? '',
    )
    const [image, setImage] = useState<string>(articleCurrent?.image ?? '')

    const dispatch = useAppDispatch()
    const onSubmit = (data: IFormInputs) => {
        if (articleCurrent) {
            dispatch(
                editArticleAxios({
                    id: articleCurrent?.id.toString() ?? '',
                    title: data.title,
                    description: data.description,
                    content: data.content,
                    image: data.image,
                    createdAt: new Date().toISOString(),
                }),
            )
        } else {
            dispatch(
                addArticleAxios({
                    title: data.title,
                    description: data.description,
                    content: data.content,
                    image: data.image,
                    createdAt: new Date().toISOString(),
                }),
            )
        }
        closeModal()
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
            >
                <Form.Label>Article Title</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={2}
                    value={title}
                    {...register('title', { required: true })}
                    onChange={e => setTitle(e.target.value)}
                />
                {errors.title && (
                    <span className='text-danger'>This field is required</span>
                )}
            </Form.Group>
            <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
            >
                <Form.Label>Article Description</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={4}
                    value={description}
                    {...register('description', { required: true })}
                    onChange={e => setDescription(e.target.value)}
                />
                {errors.description && (
                    <span className='text-danger'>This field is required</span>
                )}
            </Form.Group>

            <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
            >
                <Form.Label>Article Content</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={4}
                    value={content}
                    {...register('content', { required: true })}
                    onChange={e => setContent(e.target.value)}
                />
                {errors.content && (
                    <span className='text-danger'>This field is required</span>
                )}
            </Form.Group>

            <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
            >
                <Form.Label>Article Image Link</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={4}
                    value={image}
                    {...register('image', {
                        required: true,
                        pattern:
                        // eslint-disable-next-line no-useless-escape
                        /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/?].*)?$/,
                    })}
                    onChange={e => setImage(e.target.value)}
                />
                {errors.image?.type == 'required' && (
                    <span className='text-danger'>This field is required</span>
                )}
                {errors.image?.type == 'pattern' && (
                    <span className='text-danger'>
                        This field is a HTML link
                    </span>
                )}
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    )
}

export default FormCreatedUpdateComp
