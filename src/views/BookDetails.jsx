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
        <div className="book-details">
            <div className="title">
                <h2>{book?.name}</h2>{book?.authorName && book?.authorName !== '-' ? <span> / <h3>{book?.authorName}</h3></span> : ''}
            </div>
            {book?.place || book?.yearStart || book?.yearEnd ?
                <div className="place-years">
                    {book?.place && book?.place !== '-' ?
                        <span>
                            נתחבר ב<span>{book?.place}</span>
                        </span> : ''}
                    {(!book?.place || book?.place === '-') && book?.yearStart && book?.yearStart !== '-' ? <span>נתחבר </span> : ''}
                    {book?.yearStart && book?.yearStart !== '-' ? <span> בשנים <span>{book?.yearStart}</span>-<span>{book?.yearEnd}</span></span> : ''}
                </div>
                : ''}
            {book?.biographyShort && book?.biographyShort !== '-' ? <div className="biography-short"> <h4>על הספר בכמה מילים:</h4> <span>{book?.biographyShort}</span></div> : ''}
            {book?.biographyLong && book?.biographyLong !== '-' ? <div className="biography-long"> <h4>ביוגרפיה:</h4> <span>{book?.biographyLong}</span></div> : ''}
            {book?.authorId && book?.authorName && book?.authorName !== '-' ? <div> <a href={`${baseUrl}#author-${book?.authorId}`}>כל ספרי {book?.authorName}</a> </div> : ''}
            {book?.authorId && book?.authorName && book?.authorName !== '-' ? <div> <a href={`https://jewishoffice.co.il/Rabanan/?id=${book?.authorId}`}>{book?.authorName} באנציקלופדיית רבנן</a> </div> : ''}
        </div>
    )
}

export default BookDetails
