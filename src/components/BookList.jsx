import React from 'react'
import BookPreview from './BookPreview'
function BookList(props) {
    const bookListData = props.bookList
    return (
        <div>
            {bookListData.map((book) => <BookPreview key={book.id} book={book} /> )}
        </div>
    )
}

export default BookList
