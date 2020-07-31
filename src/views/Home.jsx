import React, { useState, useEffect } from 'react'

import CategoryList from '../components/CategoryList'
import { http } from '../services/http.js'
import NewBooks from '../components/NewBooks'
import Find from '../components/Finder'

const Home = () => {
    const [categoryListData, setCategoryListData] = useState([]);
    const [clear, setClear] = useState(false);
    useEffect(() => {
        http.getCategoryList()
            .then(cat => setCategoryListData(cat))

    }, [])

    //let categoryListData = http.getCategoryList();

    return (
        <div className="home">
            <Find onClear={setClear} />
            {clear ? '' : <CategoryList list={categoryListData} />}
            <NewBooks />
        </div>
    )
}

export default Home
