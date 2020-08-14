import React from 'react'
import { baseUrl } from '../services/config'
import BookList from '../components/BookList'

const ViewResults = (props) => {
    return (
        <div className="view-results">
            {props.findResults?.books ? <BookList onClick={props.clear} bookList={props.findResults.books} /> : ''}
            {props.findResults?.authors ? props.findResults.authors.map(author =>
                <div key={author.id}>
                    <a onClick={props.clear} href={baseUrl + '#author-' + author.id}>{author.name}</a>
                </div>)
                 : ''}
 
        </div>
    )
}

export default ViewResults
