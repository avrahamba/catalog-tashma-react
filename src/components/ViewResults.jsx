import React from 'react'
import { baseUrl } from '../services/config'
import BookList from '../components/BookList'

const ViewResults = (props) => {
    return (
        <div className="view-results">
            {props.findResults?.books ? <BookList bookList={props.findResults.books} /> : ''}
            {props.findResults?.authors ? props.findResults.authors.map(author =>
                <div>
                    <a href={baseUrl + '#author-' + author.id} key={author.id}>{author.name}</a>
                </div>)
                 : ''}
 
        </div>
    )
}

export default ViewResults
