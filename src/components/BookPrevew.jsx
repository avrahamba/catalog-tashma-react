import React from 'react'
import { baseUrl } from '../services/config'
function BookPrevew(props) {
    const { id, name, authorName, authorId } = props.book

    return (
        <div>
            <a href={baseUrl + '#book-' + id}>{name}</a> {authorName && authorName !== '-' ? <span> / <a href={baseUrl + '#author-' + authorId}>{authorName}</a></span> : ''}
        </div>
    )
}

export default BookPrevew
