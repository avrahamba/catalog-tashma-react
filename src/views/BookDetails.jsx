import React, { useState, useEffect } from 'react'
import { http } from '../services/http.js'

const BookDetails = () => {

    const [route, setRoute] = useState(window.location.hash.substr(1));
    const [book, setBook] = useState(null);
    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
            init()
        })
        init()
    }, [])
    const init = async () => {
        const bookId = window.location.hash.substr(1).substr(5);
        setBook(await http.getBook(bookId))
    }

    return (
        <div>
            {JSON.stringify(book)}
        </div>
    )
}

export default BookDetails
