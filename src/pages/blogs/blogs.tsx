import { Link } from 'react-router-dom';
import { Article } from '../../App';
import './blogs.css';
import parse from 'html-react-parser';

interface BlogsProps {
    articles: Article[];
    currentPage: number;
}

export const Blogs = ({ articles, currentPage }: BlogsProps) => {
    const itemsPerPage = 2;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = articles.slice(startIndex, endIndex);

    return (
        <ul className="list-unstyled container">
            {currentItems.map((article: Article) => {
                return (
                    <li
                        className="row media articles-container"
                        key={article.id}>
                        <div className="col-4 articles-left">
                            <img
                                src={article.image}
                                className="img-thumbnail mr-3 w-100 h-100"
                                alt="..."
                            />
                        </div>
                        <div className="media-body col-8 articles-right">
                            <Link to={`/articles/${article.id}`} className="page-link text-dark">
                                <>
                                <h5 className="mt-0 mb-1">{article.title}</h5>
                                <div className="articles-content text-left">
                                    {parse(article.content)}
                                </div>
                                </>
                            </Link>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
