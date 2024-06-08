import './App.css';
import { Blogs } from './pages/blogs/blogs';
import Pagination from './components/paginations';
import { Outlet, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/index';
import { HeaderNavBar } from './components/headerNavBar';
import { SearchArticles } from './components/searchArticles';
import { sortedArticlesByDate } from './redux/store/reducer';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { fetchArticles } from './redux/store/fetchArticles';

function App() {
    const articles = useAppSelector((state) => state.articles);
    const articlesSearch = useAppSelector((state) => state.articlesSearch);
    const currentArticles =
        articlesSearch.length == 0 ? articles : articlesSearch;
    const [sortUp, setSortUp] = useState(true);
    const itemsPerPage = parseInt(import.meta.env.VITE_ITEMS_PER_PAGE);
    const totalPages = Math.ceil(currentArticles.length / itemsPerPage);
    const { pageId, id } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticles(import.meta.env.VITE_API_ARTICLES_URL));
    }, [dispatch]);

    return (
        <div>
            <HeaderNavBar />
            <SearchArticles />
            <div className='my-3'>
                <button
                    className='btn btn-secondary'
                    type='button'
                    onClick={() => {
                        setSortUp(!sortUp);
                        dispatch(sortedArticlesByDate(sortUp));
                    }}>
                    {' '}
                    {sortUp ? <FaSortAmountUp /> : <FaSortAmountDown />}
                    sort by date
                </button>
            </div>
            <div className="mx-5">
                {id ? (
                    <Outlet />
                ) : (
                    <Blogs
                        articles={currentArticles}
                        currentPage={parseInt(pageId ?? '1')}
                        itemsPerPage={itemsPerPage}
                    />
                )}
            </div>
            <div className="pb-4">
                {!id && (
                    <Pagination
                        currentPage={parseInt(pageId ?? '1')}
                        totalPages={totalPages}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
