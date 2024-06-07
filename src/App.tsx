import { useEffect, useState } from 'react';
import './App.css';
import { Blogs } from './pages/blogs/blogs';
import Pagination from './components/paginations';
import { useParams } from 'react-router-dom';

export interface Article {
    id: number;
    title: string;
    content: string;
    image: string;
    description: string;
    createdAt: string;
}

function App() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const { pageId } = useParams();

    useEffect(() => {
        fetch(import.meta.env.VITE_API_ARTICLES_URL)
            .then((response) => response.json())
            .then((json) => {
                setArticles(json);
                setTotalPages(Math.ceil(json.length / 2));
            });
    }, []);

    return (
        <>
            <div>Home Page</div>
            <div>
                <span>List blogs</span>
                <p>{import.meta.env.VITE_TEST}</p>
                <Blogs articles={articles} currentPage={parseInt(pageId ?? "1")}/>
            </div>
            <div>
                <Pagination currentPage={parseInt(pageId ?? "1")} totalPages={totalPages}/>
            </div>
        </>
    );
}

export default App;
