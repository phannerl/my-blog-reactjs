import { useEffect, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../hooks/useDebounce'

interface ISearchArticlesProps {
    className?: string
}

const SearchArticlesComp = ({ className = '' }: ISearchArticlesProps) => {
    const [searchTerm, setSearchTerm] = useState('')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setSearchParams] = useSearchParams()
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    useEffect(() => {
        setSearchParams({
            search: debouncedSearchTerm,
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchTerm])

    const onSearchArticles = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setSearchTerm(e.target.value)
    }


    return (
        <div className={className}>
            <InputGroup className='w-70'>
                <InputGroup.Text id='inputGroup-sizing-default'>
                    Search
                </InputGroup.Text>
                <Form.Control
                    type='text'
                    onChange={e => onSearchArticles(e)}
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                />
            </InputGroup>
        </div>
    )
}

export default SearchArticlesComp
