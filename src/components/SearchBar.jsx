import { useState } from 'react'
import { stringSimilarity } from "string-similarity-js"

function SearchBar(props) {
    const { searchKey, data, onSearch, ...rest } = props
    const [searchTerm, setSearchTerm] = useState('')

    function search(e) {
        e.preventDefault()

        if (!searchTerm) {
            console.log(data)
            onSearch(data)
            return
        }

        const matches = data.filter((item) => stringSimilarity(item[searchKey], searchTerm) > 0.4)
        onSearch(matches)
    }

    return (
        <form onSubmit={(e) => search(e)}>
            <input
                type="text"
                id='search-bar'
                name='search-bar'
                placeholder='Digite sua busca'
                onChange={(e) => setSearchTerm(e.target.value)}
                {...rest}>
            </input>
        </form>
    )
}

export default SearchBar