import React, { useState, useEffect } from 'react'

import { http } from '../services/http.js'
import BookList from '../components/BookList'
import AerrayLinks from '../components/ArrayLinks'
import { baseUrl } from '../services/config'
import NewBooks from '../components/NewBooks'
import RandomAndAsk from '../components/RandomAndAsk'


const CategoryDetails = (props) => {
    const [route, setRoute] = useState(window.location.hash.substr(1));
    const [category, setCategory] = useState(null);
    const { mode ,findResults} = props
    const [loaclMode, setLoaclMode] = useState(props);
    const init = async () => {
        const route = window.location.hash.substr(1);
        const categoryId = route.includes('page-') ? route.substr(9).substr(0, route.substr(9).indexOf('page-')) : route.substr(9);
        setCategory(await http.getCategory(categoryId, mode, route.includes('page-') ? route.substr(route.indexOf('page-') + 5) : 1))
    }
    if (mode !== loaclMode) {
        setLoaclMode(mode);
        init()
    }
    let page = route.includes('page-') ? route.substr(route.indexOf('page-') + 5) : 1;
    useEffect(() => {
        console.log('mode', mode)
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
            init()
        })
        init()
    }, [])
    const categoryId = route.includes('page-') ? route.substr(9).substr(0, route.substr(9).indexOf('page-')) : route.substr(9)
    return (
        <div>
            {category ? <h2>{category.categoryDetails.name}</h2> : ''}
            {category?.books ? <BookList bookList={category.books} /> : ''}
            {category ? <AerrayLinks count={category.count} current={page} url={baseUrl + '#category-' + categoryId + 'page-'} /> : ''}
            <RandomAndAsk />
            <NewBooks />
        </div>
    )
}

export default CategoryDetails