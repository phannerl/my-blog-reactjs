import { Dropdown } from 'react-bootstrap'
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import { paramsParser } from '../utils'

interface IDropdownSortedProps {
    className?: string
    sortParams: {
        id: number
        order: string
        sortBy: string
        title: string
    }[]
}

const DropdownSortedComp = ({
    className = '',
    sortParams,
}: IDropdownSortedProps) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { limit, search } = paramsParser(searchParams)

    const handleSort = ({
        order = 'asc',
        sortBy = 'id',
    }: {
        order?: string
        sortBy?: string
    }) => {
        return setSearchParams({
            page: '1',
            limit: limit.toString(),
            sortBy,
            order,
            search,
        })
    }

    return (
        <div>
            <Dropdown className={className}>
                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                    Sorted By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {sortParams.map(param => {
                        return (
                            <Dropdown.Item
                                key={param.id}
                                onClick={() =>
                                    handleSort({
                                        order: param.order,
                                        sortBy: param.sortBy,
                                    })
                                }
                            >
                                {param.order === 'asc' ? (
                                    <FaSortAmountUp className='me-2' />
                                ) : (
                                    <FaSortAmountDown className='me-2' />
                                )}
                                {param.title}
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DropdownSortedComp
