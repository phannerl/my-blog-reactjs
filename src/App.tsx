import { Outlet, useParams } from 'react-router-dom'
import './App.css'
import { HeaderNavBar } from './components/header-navbar'
import { Blogs } from './pages/blogs/blogs'

function App() {
    const { articleId } = useParams()

    return (
        <div>
            <HeaderNavBar />
            {articleId ? <Outlet /> : <Blogs />}
        </div>
    )
}

export default App
