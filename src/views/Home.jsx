import React, { useState, useEffect } from 'react'

import CategoryList from '../components/CategoryList'
import {http} from '../services/http.js'

const Home = () => {
    const [categoryListData, setCategoryListData] = useState([]);
    useEffect(() => {
        http.getCategoryList()
           .then(cat => setCategoryListData( cat))

        }, [])
    

    //let categoryListData = http.getCategoryList();

    return (
        <div className="home">
            <CategoryList list={categoryListData}/>
        </div>
    )
}

export default Home
