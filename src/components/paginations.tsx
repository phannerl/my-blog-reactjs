import Pagination from 'react-bootstrap/Pagination'
import { useSearchParams } from 'react-router-dom'
import { paramsParser } from '../utils'
import { useAppSelector } from '@/redux'

const PaginationComp = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const allArticles = useAppSelector(state => state.articles)
    
    if (!allArticles || allArticles.length === 0) return <></>

    const totalPages = Math.ceil(
        allArticles.length / parseInt(import.meta.env.VITE_ITEMS_PER_PAGE),
    )
    const { currentPage, limit, sortBy, order, search } =
        paramsParser(searchParams)

    const pageNumbers = []

    for (let number = 1; number <= totalPages; number++) {
        pageNumbers.push(number)
    }

    return (
        <Pagination>
            {pageNumbers.map(number => {
                return (
                    <Pagination.Item
                        key={number}
                        onClick={() => {
                            setSearchParams({
                                page: number.toString(),
                                limit: limit.toString(),
                                sortBy,
                                order,
                                search,
                            })
                        }}
                        className='text-dark text-decoration-none'
                        active={number === parseInt(currentPage)}
                    >
                        {number}
                    </Pagination.Item>
                )
            })}
        </Pagination>
    )
}

export default PaginationComp
