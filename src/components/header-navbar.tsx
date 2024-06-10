import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderNavBarComp = () => {
    return (
        <Container className='d-flex justify-content-between mb-3 py-3 bg-dark text-white'>
            <h1 className='ms-lg-5'>Daily news</h1>
            <div className='d-flex mx-xl-4 align-items-center'>
                <Link to='/blogs' className='me-4 text-white'>
                    Home
                </Link>
                <Link to='/about' className='me-lg-5 text-white'>
                    About
                </Link>
            </div>
        </Container>
    )
}

export default HeaderNavBarComp;
