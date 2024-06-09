import parse from 'html-react-parser';


export const removeDiacritics = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const timeFormatter = (time: string, format: string) => {
    return new Date(time).toLocaleTimeString(format, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    });
};

export const parserText = (text: string) => {
    return parse(text || '');
};

export const paramsParser = (params: URLSearchParams) => {
    const currentPage = parseInt(params.get('page') ?? '1');
    const limit = parseInt(
        params.get('limit') ?? import.meta.env.VITE_ITEMS_PER_PAGE,
    );
    const sortBy = params.get('sortBy') ?? 'id';
    const order = params.get('order') ?? 'asc';
    const search = params.get('search') ?? '';
    const fullParamsUrl = `page=${currentPage}&limit=${limit}&sortBy=${sortBy}&order=${order}&search=${search}`;
    const fullParamsUrlNoPage = `limit=${limit}&sortBy=${sortBy}&order=${order}&search=${search}`;
    
    return { currentPage, limit, sortBy, order, search, fullParamsUrl, fullParamsUrlNoPage };
};
