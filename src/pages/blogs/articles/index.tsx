import { fetchCurrentArticle } from '@/axios-action'
import { HeaderArticleComp } from '@/components'
import Loading from '@/components/loading'
import { useAppDispatch, useAppSelector } from '@/redux'
import { timeFormatter, parserText } from '@/utils'
import { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { FaRegClock } from 'react-icons/fa'
import { useParams } from 'react-router-dom'


const Articles = () => {
    const { articleId } = useParams()
    const dispatch = useAppDispatch()
    const article = useAppSelector(state => state.currentArticle)

    useEffect(() => {
        dispatch(fetchCurrentArticle(articleId!))
    }, [dispatch, articleId])

    if (!article) {
        return <Loading />
    }

    return (
        <>
            <HeaderArticleComp articleCurrent={article} title={article.title} />
            <Row>
                <div className='mb-2'>
                    <FaRegClock className='me-1' />
                    <small>{timeFormatter(article.createdAt, 'en-US')}</small>
                </div>
            </Row>
            <Row className='mb-2'>
                <img
                    src={article.image}
                    alt={article.title}
                    className='w-100'
                />
            </Row>
            <Row className='text-start'>
                <p>{parserText(article.content)}</p>
            </Row>
        </>
    )
}

export default Articles;
