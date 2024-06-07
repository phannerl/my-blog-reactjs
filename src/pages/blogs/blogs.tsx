import { Link } from 'react-router-dom';
import './blogs.css';
import parse from 'html-react-parser';
import { IArticle } from '../../type.d';

interface BlogsProps {
    articles: IArticle[];
    currentPage: number;
    itemsPerPage?: number;
}

export const Blogs = ({ articles, currentPage, itemsPerPage = 2 }: BlogsProps) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = articles.slice(startIndex, endIndex);
    console.log("currentItems",currentItems);
    return (
        <ul className="list-unstyled container">
            {currentItems.map((article: IArticle) => {
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
