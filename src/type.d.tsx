export interface IArticle {
    id: number;
    title: string;
    content: string;
    image: string;
    description: string;
    createdAt: string;
}
export type ArticleState = {
    articles: IArticle[];
};

export type ArticleAction = {
    type: string;
    article: IArticle;
};

export type DispatchType = (args: ArticleAction) => ArticleAction;
