import React from 'react'
import { baseUrl } from '../services/config'
function BookPreview(props) {
    const { id, name, authorName, authorId } = props.book
    const { onClick } = props
    return (
        <div className="book-preview">
            <a onClick={onClick} className="book" href={baseUrl + '#book-' + id}>{name}</a>
            {authorName && authorName !== '-' ? <span> / {authorId !== '-1' ? <a onClick={onClick} href={baseUrl + '#author-' + authorId}>{authorName}</a> : authorName}</span> : ''}
        </div>
    )
}

export default BookPreview
