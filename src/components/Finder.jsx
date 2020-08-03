import React, { useEffect, useState } from 'react'
import { http } from '../services/http.js'
import BookList from '../components/BookList'
import { baseUrl } from '../services/config'

const Finder = (props) => {
    const clearHandler = props.onClear
    const [results, setResults] = useState(null)
    const changeHandler = (e) => {
        init(e.target.value)
    }
    const init = async (textToFind) => {
        if (textToFind) {
            const res = await http.getFind(textToFind)
            if (res?.authors || res?.books) clearHandler(true)
            else clearHandler(false)

            props.onFind(res)
        }
        else {
            props.onFind(null)
            clearHandler(false)
        }
    }

    return (
        <div className="find">
            <input type="text" placeholder="חפש" onChange={changeHandler} />
            {results?.authors ? results.authors.map(author =>
                <div>
                    <a href={baseUrl + '#author-' + author.id} key={author.id}>{author.name}</a>
                </div>)
                 : ''}
            {results?.books ? <BookList bookList={results.books} /> : ''}
        </div>
    )
}

export default Finder
