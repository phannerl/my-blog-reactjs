import './App.css';
import { Blogs } from './pages/blogs/blogs';
import Pagination from './components/paginations';
import { useParams } from 'react-router-dom';
import { useAppSelector } from './redux/index';
import { FetchData } from './components/fetchData';


function App() {
    const articles = useAppSelector((state) => state.articles);
    const totalPages = Math.ceil(articles.length / 3);
    const { pageId } = useParams();
    const itemsPerPage = 3;

    return (
        <>
            <div>Home Page</div>
            <div>
                <span>List blogs</span>
                <FetchData />
                <Blogs
                    articles={articles}
                    currentPage={parseInt(pageId ?? '1')}
                    itemsPerPage={itemsPerPage}
                />
            </div>
            <div>
                <Pagination
                    currentPage={parseInt(pageId ?? '1')}
                    totalPages={totalPages}
                />
            </div>
        </>
    );
}

export default App;
