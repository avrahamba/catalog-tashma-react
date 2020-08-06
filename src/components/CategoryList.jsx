import React from 'react'

import CategoryPreview from './CategoryPreview'

const ViewList = (props) => {
const list = props.list
    return (
        <div className="category-list">
            {list.filter(category => category.name).map(category=><CategoryPreview key={category.ID} category={category}/>)}
        </div>
    )
}

export default ViewList
