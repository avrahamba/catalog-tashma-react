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
            .then(book =>{console.log('book', book); setAuthor(book)})
    }, [])

    return (
        <div>
            {JSON.stringify(author)}
    {author ? <h2>{author.author.name}</h2>:''}
           {author ? <BookList bookList={author.books}/>:''}
        </div>
    )
}

export default AuthorDetails