import React, { useState, useEffect } from 'react'
import { http } from '../services/http.js'
import { baseUrl } from '../services/config'
const BookDetails = () => {

    const [route, setRoute] = useState(window.location.hash.substr(1));
    const [book, setBook] = useState(null);
    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
            if (window.location.hash.includes('book')) init()
        })
        init()
    }, [])
    const init = async () => {
        const bookId = window.location.hash.substr(1).substr(5);
        setBook(await http.getBook(bookId))
    }

    return (
        <div>
            <h2>{book?.name}</h2>/<h3>{book?.authorName}</h3>
            <span>
                נתחבר ב<span>{book?.place}</span>
            </span>
            {book?.yearStart && book?.yearStart !== '-' ? <span> בשנים <span>{book?.yearStart}</span>-<span>{book?.yearEnd}</span></span> : ''}
            {book?.biographyShort && book?.biographyShort !== '-' ? <div> על הספר בכמה מילים: <br /> <span>{book?.biographyShort}</span></div> : ''}
            {book?.biographyLong && book?.biographyLong !== '-' ? <div>ביוגרפיה:  <span>{book?.biographyLong}</span></div> : ''}
            {book?.authorId ? <div> <a href={`${baseUrl}#author-${book?.authorId}`}>כל ספרי המחבר</a> </div> : ''}
        </div>
    )
}

export default BookDetails
