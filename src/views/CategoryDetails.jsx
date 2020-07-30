import React, { useState, useEffect } from 'react'

import { http } from '../services/http.js'
import BookList from '../components/BookList'

const CategoryDetails=()=> {
    const [route, setRoute] = useState(window.location.hash.substr(1));
    const [category, setCategory] = useState(null);

    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
        })
        const categoryId = route.substr(9);
        http.getCategory(categoryId)
            .then(cat => setCategory(cat))

    }, [])
    return (
        <div>
            {category ? <h2>{category.categoryDetails.name}</h2>   : ''}
            {category?.books ? <BookList bookList={category.books} /> : ''}

        </div>
    )
}

export default CategoryDetails