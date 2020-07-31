import React, { useEffect, useState } from 'react'
import { http } from '../services/http.js'
import BookList from '../components/BookList'
import { baseUrl } from '../services/config'

const Finder = (props) => {
    const clearHeaders = props.onClear

    const [results, setResults] = useState(null)
    const changeHandler = (e) => {
        init(e.target.value)
    }
    const init = async (textToFind) => {
        console.log('textToFind', textToFind)
        if (textToFind) {
            const res = await http.getFind(textToFind)
            if (res?.authors || res?.books) clearHeaders(true)
            else clearHeaders(false)

            setResults(res)
        }
        else {
            setResults(null)
            clearHeaders(false)
        }
    }

    return (
        <div>
            <input type="text" onChange={changeHandler} />
            {results?.authors ? results.authors.map(author => <div>
                <a href={baseUrl + '#author-' + author.id} key={author.id}>{author.name}</a>
            </div>) : ''}
            {results?.books ? <BookList bookList={results.books} /> : ''}
        </div>
    )
}

export default Finder
