import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const BlogsLayout = () => {
    return (
        <Container
            fluid='sm'
            className='w-100 d-flex flex-column align-items-center justify-content-center px-2'
        >
            <Outlet />
        </Container>
    )
}

export default BlogsLayout
