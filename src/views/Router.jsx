import React, { useState, useEffect } from 'react'

import Home from './Home'
import CategoryDetails from './CategoryDetails'
import BookDetails from './BookDetails'
import AuthorDetails from './AuthorDetails'
import Header from '../components/Header'
function Router() {
    const [route, setRoute] = useState(window.location.hash.substr(1));
    const [clear, setClear] = useState(false);
    const [mode, setMode] = useState('name')
    const [results, setResults] = useState(null)
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
        <div className="router">
            {getChild()}
            <Header onClear={setClear} onMode={setMode} onFind={setResults}/>
            <Child clear={clear} results={results} mode={mode} />
        </div>
    )
}

export default Router
