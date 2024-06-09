import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';

interface ISearchArticlesProps {
    className?: string;
}

const SearchArticlesComp = ({ className = '' }: ISearchArticlesProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm != null) {
            navigate(`/blogs?search=${debouncedSearchTerm}`);
        }
    }, [debouncedSearchTerm, navigate]);

    const onSearchArticles = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={className}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search this blog"
                    onChange={(e) => onSearchArticles(e)}
                />
            </div>
        </div>
    );
};

export default SearchArticlesComp;
