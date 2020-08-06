import React, { useState, useEffect } from 'react'

import CategoryList from '../components/CategoryList'
import { http } from '../services/http.js'
import NewBooks from '../components/NewBooks'
import RandomAndAsk from '../components/RandomAndAsk'
import ViewResults from '../components/ViewResults';
const Home = (props) => {
    const {clear,findResults} = props
    const [categoryListData, setCategoryListData] = useState([]);
    useEffect(() => {
        http.getCategoryList()
            .then(cat => setCategoryListData(cat))

    }, [])
    //let categoryListData = http.getCategoryList();

    return (
        <div className="home">
            {clear ? 
            <ViewResults findResults={findResults} /> :
            <CategoryList list={categoryListData} />}
            <div className="side-bar">
                <RandomAndAsk />
                <NewBooks />
            </div>
        </div>
    )
}

export default Home
