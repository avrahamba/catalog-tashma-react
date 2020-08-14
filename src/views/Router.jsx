import React, { useState, useEffect } from 'react'

import Home from './Home'
import CategoryDetails from './CategoryDetails'
import BookDetails from './BookDetails'
import AuthorDetails from './AuthorDetails'
import Header from '../components/Header'
import NewBooks from '../components/NewBooks'
import RandomAndAsk from '../components/RandomAndAsk'
import ViewResults from '../components/ViewResults'
import Menu from '../components/Menu'

function Router() {
    const [route, setRoute] = useState(window.location.hash.substr(1));
    const [clear, setClear] = useState(false);
    const [findResults, setFindResults] = useState(null)
    const [mode, setMode] = useState('categories');
    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
        })
    }, [])
    let Child;
    const modeHandler = (evMode) => {
        window.location.hash = ''
        setMode(evMode)
    }
    function getChild() {
        Child = Home;
        if (route.substr(0, 'category-'.length) === 'category-')
            Child = CategoryDetails;
        if (route.substr(0, 'ab-'.length) === 'ab-')
            Child = CategoryDetails;
        if (route.substr(0, 'book-'.length) === 'book-')
            Child = BookDetails;
        if (route.substr(0, 'author-'.length) === 'author-')
            Child = AuthorDetails;
    }

    return (
        <div className="router">
            {getChild()}
            <div className="header-continer">
                <Header onClear={setClear} onFind={setFindResults} />
                <Menu canngeMode={modeHandler} />
            </div>
            <RandomAndAsk />
            {clear ?
                <ViewResults findResults={findResults} clear={() =>{setClear(false)}} /> :
                <div>
                    {mode === 'categories' || mode === 'ab' ? <Child className="main" mode={mode} /> : ''}
                </div>
            }
            <div className="side-bar">
                <NewBooks />
            </div>
        </div>
    )
}

export default Router
