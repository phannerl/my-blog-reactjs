import './App.css';
import { Blogs } from './pages/blogs/blogs';
import Pagination from './components/paginations';
import { Outlet, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/index';
import { FetchData } from './components/fetchData';
import { HeaderNavBar } from './components/headerNavBar';
import { SearchArticles } from './components/searchArticles';
import { sortedArticlesByDate } from './redux/store/reducer';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import { useState } from 'react';

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

    return (
        <div>
            <HeaderNavBar />
            <SearchArticles />
            <div>
                <button
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
                <FetchData />
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
