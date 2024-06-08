import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useAppDispatch } from '../redux';
import { searchArticles } from '../redux/store/reducer';

export const SearchArticles = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 100);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchArticles(debouncedSearchTerm));
    }, [debouncedSearchTerm, dispatch]);

    const onSearchArticles = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="mx-5">
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
