import { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { FaRegClock } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { fetchCurrentArticleAxios } from 'src/axios-action'
import { HeaderArticleComp } from 'src/components'
import Loading from 'src/components/loading'
import { useAppDispatch, useAppSelector } from 'src/redux'
import { parserText, timeFormatter } from 'src/utils'

const Articles = () => {
    const { articleId } = useParams()
    const dispatch = useAppDispatch()
    const article = useAppSelector(state => state.currentArticle)

    useEffect(() => {
        dispatch(fetchCurrentArticleAxios(`/${articleId}`))
    }, [dispatch, articleId])

    if (!article) {
        return <Loading />
    }

    return (
        <>
            <HeaderArticleComp title={article.title} />
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
