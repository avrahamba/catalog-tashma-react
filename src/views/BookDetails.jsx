import React, { useState, useEffect } from 'react'
import { http } from '../services/http.js'

const BookDetails = () => {

    const [route, setRoute] = useState(window.location.hash.substr(1));
    const [book, setBook] = useState(null);

    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
        })
        const bookId = route.substr(5);
        http.getBook(bookId)
            .then(book =>{console.log('book', book); setBook(book)})
    }, [])

    return (
        <div>
            {JSON.stringify(book)}
        </div>
    )
}

export default BookDetails
