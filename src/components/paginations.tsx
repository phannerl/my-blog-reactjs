import { Link } from 'react-router-dom';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <Link to={`/blogs/${number}`} className="page-link">
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
