import { Container } from 'react-bootstrap'
import { Outlet, useParams } from 'react-router-dom'
import Blogs from '.'

const BlogsLayout = () => {
    const { articleId } = useParams()
    return (
        <Container
            fluid='sm'
            className='w-100 d-flex flex-column align-items-center justify-content-center px-2'
        >
            {articleId ? <Outlet /> : <Blogs />}
        </Container>
    )
}

export default BlogsLayout
