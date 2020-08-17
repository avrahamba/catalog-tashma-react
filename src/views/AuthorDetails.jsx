import React, { useState, useEffect } from 'react'
import { http } from '../services/http.js'
import BookList from '../components/BookList'
import loadImg from '../img/Eclipse-1s-200px.svg'

const AuthorDetails = () => {

    const [author, setAuthor] = useState(null);
    const [, setRoute] = useState(window.location.hash.substr(1));
    const init = async () => {
        setAuthor(null)
        const authorId = window.location.hash.substr(8);
        setAuthor(await http.getAuthor(authorId))
    }
    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
            if (window.location.hash.includes('author')) init()
        })
        init()
    }, [])
    if (author) return (
        <div className="author-details">
            {author?.author ? <h2>{author.author.name}</h2> : ''}
            <h3>רשימת הספרים:</h3>
            {author ? <BookList bookList={author.books} /> : ''}
            {author?.author?.id && author?.author?.name && author?.author?.name !== '-' ? <div className="rabanan"> <a href={`https://jewishoffice.co.il/Rabanan/?id=${author?.author?.id}`}>{author?.author?.name} באנציקלופדיית רבנן</a> </div> : ''}
        </div>
    )
    return (
        <div className="loading">
            <img src={loadImg} alt="" />
        </div>
    )

}

export default AuthorDetails