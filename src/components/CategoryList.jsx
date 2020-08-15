import React from 'react'

import CategoryPreview from './CategoryPreview'
import loadImg from '../img/Eclipse-1s-200px.svg'

const ViewList = ({ list }) => {
    if (list.length > 0)
        return (
            <div className="category-list">
                {list.filter(category => category.name).map(category => <CategoryPreview key={category.ID} category={category} />)}
            </div>
        )
    return (
        <div className="loading">
            <img src={loadImg} alt="" />
        </div>
    )
}

export default ViewList
