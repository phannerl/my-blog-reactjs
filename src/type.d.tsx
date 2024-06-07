export interface IArticle {
    id: string;
    title: string;
    content: string;
    image: string;
    description: string;
    createdAt: string;
}
export type ArticleState = {
    articles: IArticle[];
    articlesSearch: IArticle[];
};

export type ArticleAction = {
    type: string;
    article: IArticle;
};

export type DispatchType = (args: ArticleAction) => ArticleAction;
