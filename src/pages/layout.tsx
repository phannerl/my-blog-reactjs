import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { FooterComp } from 'src/components'
import { HeaderNavBar } from 'src/components/header-navbar'

const PageLayout = () => {
    return (
        <>
            <HeaderNavBar />
            <Container
                fluid='sm'
                className='text-center d-flex flex-column justify-content-between'
            >
                <Outlet />
                <FooterComp />
            </Container>
        </>
    )
}

export default PageLayout
