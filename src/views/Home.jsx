import React, { useState, useEffect } from 'react'

import CategoryList from '../components/CategoryList'
import { http } from '../services/http.js'
import NewBooks from '../components/NewBooks'
import RandomAndAsk from '../components/RandomAndAsk'

const Home = (props) => {
    const {clear} = props
    const [categoryListData, setCategoryListData] = useState([]);
    useEffect(() => {
        http.getCategoryList()
            .then(cat => setCategoryListData(cat))

    }, [])
    //let categoryListData = http.getCategoryList();

    return (
        <div className="home">
            {clear ? '' : <CategoryList list={categoryListData} />}
            <RandomAndAsk />
            <NewBooks />
        </div>
    )
}

export default Home
