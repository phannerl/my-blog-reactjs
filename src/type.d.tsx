export interface IArticle {
    id: string
    title: string
    content: string
    image: string | undefined
    description: string
    createdAt: string
}

export interface IAddArticle {
    title: string
    content: string
    image: string | undefined
    description: string
    createdAt: string
}

export type ArticleState = {
    articles: IArticle[]
    currentArticles: IArticle[]
    currentArticle: IArticle | null
}

export type ArticleAction = {
    type: string
    article: IArticle
}

export type DispatchType = (args: ArticleAction) => ArticleAction
