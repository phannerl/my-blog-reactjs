import { Outlet, useSearchParams } from 'react-router-dom'
import './App.css'
import { HeaderNavBar } from './components/headerNavBar'
import { Blogs } from './pages/blogs/blogs'

function App() {
    const [searchParams] = useSearchParams()
    const articleId = searchParams.get('id')

    return (
        <div>
            <HeaderNavBar />
            {articleId ? <Outlet /> : <Blogs />}
        </div>
    )
}

export default App
