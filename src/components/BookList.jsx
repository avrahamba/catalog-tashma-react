import React from 'react'
import BookPreview from './BookPreview'
function BookList(props) {
    const bookListData = props.bookList
    const { onClick } = props
    const clickHandler = () => {  if (onClick) onClick() }
    return (
        <div>
            {bookListData.map((book) => <BookPreview onClick={clickHandler} key={book.id} book={book} />)}
        </div>
    )
}

export default BookList
