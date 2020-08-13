import React, { useState, useEffect } from 'react'

import CategoryList from '../components/CategoryList'
import { http } from '../services/http.js'
const Home = ({ mode }) => {
    const [categoryListData, setCategoryListData] = useState([]);
    const chars = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת']
        .map((char, idx) => { return { ID: idx, name: char, mode: 'ab' } });
    useEffect(() => {
        http.getCategoryList()
            .then(cat => setCategoryListData(cat))
    }, [])
    return (
        <div className={mode === 'categories' ?'home':'home chars'}>
            {mode === 'categories' ? <CategoryList list={categoryListData} /> : <CategoryList list={chars} />}
        </div>
    )
}

export default Home
