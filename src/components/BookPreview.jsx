import React from 'react'
import { baseUrl } from '../services/config'
function BookPreview(props) {
    const { id, name, authorName, authorId } = props.book

    return (
        <div className="book-preview">
            <a className="book" href={baseUrl + '#book-' + id}>{name}</a> {authorName && authorName !== '-' ? <span> / <a href={baseUrl + '#author-' + authorId}>{authorName}</a></span> : ''}
        </div>
    )
}

export default BookPreview
