import React, {useState, useEffect} from 'react'
import {http} from '../services/http.js'
import BookList from './BookList'


const NewBooks = () => {
const [books, setBooks] = useState(null);
useEffect(()=>{init()},[])
const init =async () => {
    setBooks(await http.getNews());
}

return (
        <div>
            {books?.books ? <BookList bookList={books.books} /> : ''}
        </div>
    )
}

export default NewBooks
