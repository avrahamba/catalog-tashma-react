import React, { useState, useEffect } from 'react'

import Home from './Home'
import CategoryDetails from './CategoryDetails'
import BookDetails from './BookDetails'
import AuthorDetails from './AuthorDetails'

function Router() {
    const [route, setRoute] = useState(window.location.hash.substr(1));
    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
        })
    }, [])
    let Child;
    function getChild() {
        Child = Home;
        if (route.substr(0, 'category-'.length) === 'category-')
            Child = CategoryDetails;
        if (route.substr(0, 'book-'.length) === 'book-')
            Child = BookDetails;
        if (route.substr(0, 'author-'.length) === 'author-')
            Child = AuthorDetails;
    }

    return (
        <div>
            
            {getChild()}
            <Child />
        </div>
    )
}

export default Router
