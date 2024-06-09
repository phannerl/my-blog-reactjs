import Pagination from 'react-bootstrap/Pagination';
import { useSearchParams } from 'react-router-dom';
import { paramsParser } from '../utils';

interface PaginationProps {
    totalPages: number;
}

const PaginationComp = ({ totalPages }: PaginationProps) => {
    const [searchParams] = useSearchParams();
    const { currentPage, fullParamsUrlNoPage } = paramsParser(searchParams);
    const pageNumbers = [];

    for (let number = 1; number <= totalPages; number++) {
        pageNumbers.push(number);
    }

    return (
        <Pagination>
            {pageNumbers.map((number) => {
                return (
                    <Pagination.Item
                        key={number}
                        href={`/blogs?page=${number}&${fullParamsUrlNoPage}`}
                        className="text-dark text-decoration-none"
                        active={number === currentPage}>
                        {number}
                    </Pagination.Item>
                );
            })}
        </Pagination>
    );
};

export default PaginationComp;
