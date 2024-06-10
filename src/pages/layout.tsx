import { FooterComp, HeaderNavBarComp } from '@/components'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

const PageLayout = () => {
    return (
        <>
            <HeaderNavBarComp />
            <Container
                fluid='sm'
                className='text-center d-flex flex-column justify-content-between'
            >
                <Outlet />
                <FooterComp />
            </Container>
            <Toaster expand={true}/>
        </>
    )
}

export default PageLayout
