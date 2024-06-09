import Pagination from 'react-bootstrap/Pagination'
import { useSearchParams } from 'react-router-dom'
import { paramsParser } from '../utils'

interface PaginationProps {
    totalPages: number
}

const PaginationComp = ({ totalPages }: PaginationProps) => {
    const [searchParams, setSearchParams] = useSearchParams()
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
                        active={number === currentPage}
                    >
                        {number}
                    </Pagination.Item>
                )
            })}
        </Pagination>
    )
}

export default PaginationComp
