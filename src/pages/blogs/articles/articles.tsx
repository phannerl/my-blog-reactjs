import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../redux';
import { FaRegClock } from 'react-icons/fa';
import parse from 'html-react-parser';

export const Articles = () => {
    const { id } = useParams();
    const article = useAppSelector((state) =>
        state.articles.find((article) => article.id === id!),
    );
    if (!article) {
        return <div>Article not found</div>;
    }
    return (
        <div className='text-left'>
            <h1>{article.title}</h1>
            <div className='mb-2'>
                <FaRegClock className="mr-1" />
                <small>
                    {new Date(article.createdAt).toLocaleTimeString('en-US', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </small>
            </div>
            <p>{parse(article.content || "")}</p>
            <img src={article.image} alt={article.title} className="w-100" />
        </div>
    );
};
