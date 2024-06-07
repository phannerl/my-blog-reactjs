import { useEffect } from "react";
import { useAppDispatch } from "../redux";
import { addArticles } from "../redux/store/reducer";

export const FetchData = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    import.meta.env.VITE_API_ARTICLES_URL as string,
                );
                const data = await response.json();
                dispatch(addArticles(data));
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    return <></>;
};