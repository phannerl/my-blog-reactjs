import { useEffect } from "react";
import { useAppDispatch } from "../redux";
import { addArticles, removeAllArticles } from "../redux/store/reducer";

export const FetchData = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    import.meta.env.VITE_API_ARTICLES_URL as string,
                );
                const data = await response.json();
                dispatch(removeAllArticles()); // Dispatch action to remove all articles
                dispatch(addArticles(data)); // Dispatch action to update the state
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    return <></>;
};