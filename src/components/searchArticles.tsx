import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useAppDispatch } from '../redux';
import { fetchArticles } from '../redux/store/fetchArticles';
import { useSearchParams } from 'react-router-dom';
import { paramsParser } from '../utils';
import { Form, InputGroup } from 'react-bootstrap';

interface ISearchArticlesProps {
    className?: string;
}

const SearchArticlesComp = ({ className = '' }: ISearchArticlesProps) => {
    const dispatch = useAppDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const { limit, sortBy, order } = paramsParser(searchParams);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        dispatch(
            fetchArticles(
                `${import.meta.env.VITE_API_ARTICLES_URL}?search=${debouncedSearchTerm}`,
            ),
        );
        setSearchParams({
            page: '1',
            limit: limit.toString(),
            sortBy,
            order,
            search: debouncedSearchTerm,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchTerm]);

    const onSearchArticles = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={className}>
            <InputGroup className="mb-3 w-70">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Search
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    onChange={(e) => onSearchArticles(e)}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
        </div>
    );
};

export default SearchArticlesComp;
