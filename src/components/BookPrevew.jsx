import React from 'react'

function BookPrevew(props) {
    const { id, name, authorName, authorId } = props.book

    return (
        <div>
            <a href={'#book-' + id}>{name}</a> {authorName && authorName !== '-' ? <span> / <a href={'#author-' + authorId}>{authorName}</a></span> : ''}
        </div>
    )
}

export default BookPrevew
