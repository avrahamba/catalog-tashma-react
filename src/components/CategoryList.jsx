import React from 'react'

import CategoryPreview from './CategoryPreview'

const ViewList = (props) => {
const list = props.list
    return (
        <div className="category-list">
            {list.map(category=><CategoryPreview key={category.ID} category={category}/>)}
        </div>
    )
}

export default ViewList
