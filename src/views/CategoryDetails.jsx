import React, { useState, useEffect } from 'react'

import { http } from '../services/http.js'
import BookList from '../components/BookList'
import AerrayLinks from '../components/ArrayLinks'
import { baseUrl } from '../services/config'
import ModeSelector from '../components/ModeSelector'
import loadImg from '../img/Eclipse-1s-200px.svg'

const CategoryDetails = () => {
    const [route, setRoute] = useState(window.location.hash.substr(1));
    const [category, setCategory] = useState(null);
    const [loaclMode, setLoaclMode] = useState(null);
    const [mode, setMode] = useState('name');
    const init = async () => {
        const route = window.location.hash.substr(1);
        if (route.includes('category-')) {
            const categoryId = route.includes('page-') ? route.substr(9).substr(0, route.substr(9).indexOf('page-')) : route.substr(9);
            setCategory(await http.getCategory(categoryId, mode, route.includes('page-') ? route.substr(route.indexOf('page-') + 5) : 1))
        } else {
            const char = route.includes('page-') ? route.substr(3).substr(0, route.substr(3).indexOf('page-')) : route.substr(3);
            const bookList = await http.getAbBooks(char, mode, route.includes('page-') ? route.substr(route.indexOf('page-') + 5) : 1)
            setCategory(bookList)
        }
    }
    if (mode !== loaclMode) {
        setLoaclMode(mode);
        init()
    }
    let page = route.includes('page-') ? route.substr(route.indexOf('page-') + 5) : 1;
    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
            init()
        })
        init()
    }, [])
    const categoryId = route.includes('page-') ? route.substr(9).substr(0, route.substr(9).indexOf('page-')) : route.substr(9)
    if (category) return (
        <div className="category-details">
            <div className="details">
                <div>
                    <div className="title-container">
                        {category?.categoryDetails ? <h2>{category.categoryDetails.name}</h2> : <h2>אות {category?.char}'</h2>}
                        {<ModeSelector onMode={setMode} />}
                    </div>
                    {category?.books ? <BookList bookList={category.books} /> : ''}
                </div>
                {category?.categoryDetails ? <AerrayLinks count={category.count} current={page} url={baseUrl + '#category-' + categoryId + 'page-'} /> :
                    <AerrayLinks count={category?.count} current={page} url={`${baseUrl}#ab-${route.includes('page-') ? route.substr(3).substr(0, route.substr(3).indexOf('page-')) : route.substr(3)}page-`} />}
            </div>
        </div>
    )
    return (
        <div className="loading">
            <img src={loadImg} alt="" />
        </div>
    )
}

export default CategoryDetails