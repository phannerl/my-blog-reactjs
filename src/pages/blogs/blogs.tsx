import { Link } from 'react-router-dom';
import './blogs.css';
import parse from 'html-react-parser';
import { IArticle } from '../../type.d';

interface BlogsProps {
    articles: IArticle[];
    currentPage: number;
    itemsPerPage?: number;
}

export const Blogs = ({
    articles,
    currentPage,
    itemsPerPage = 2,
}: BlogsProps) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = articles.slice(startIndex, endIndex);

    return (
        <ul className="list-unstyled">
            {currentItems.map((article: IArticle) => {
                return (
                    <li className="media mb-2" key={article.id}>
                        <img
                            src={article.image}
                            className="align-self-center mr-3"
                            style={{ width: '100px' }}
                            alt="..."
                        />
                        <div className="media-body article">
                            <Link
                                to={`/blogs/${currentPage}/articles/${article.id}`}
                                className="page-link text-dark text-left border-0">
                                <>
                                    <h4 className="mt-0 mb-1">
                                        {article.title}
                                    </h4>
                                    <div className="article-content">
                                        <p>{parse(article.description || "")}</p>
                                        <small>
                                            {new Date(
                                                article.createdAt,
                                            ).toLocaleTimeString('en-US', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </small>
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
