import React, { useState, useEffect } from 'react'
import { http } from '../services/http.js'
import BookList from '../components/BookList'

const AuthorDetails = () => {

    const [route, setRoute] = useState(window.location.hash.substr(1));
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
        })
        const authorId = route.substr(7);
        http.getAuthor(authorId)
            .then(author => setAuthor(author))
    }, [])

    return (
        <div className="author-details">
            {author?.author ? <h2>{author.author.name}</h2> : ''}
            {author?.author?.id && author?.author?.name && author?.author?.name !== '-' ? <div> <a href={`https://jewishoffice.co.il/Rabanan/?id=${author?.author?.id}`}>{author?.author?.name} באנציקלופדיית רבנן</a> </div> : ''}
            <h3>רשימת הספרים:</h3>
            {author ? <BookList bookList={author.books} /> : ''}
        </div>
    )
}

export default AuthorDetails