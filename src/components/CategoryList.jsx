import React from 'react'

import CategoryPreview from './CategoryPreview'

const ViewList = (props) => {
const list = props.list

    return (
        <div className="view-list">
            {list.map(category=><CategoryPreview key={category.ID} category={category}/>)}
        </div>
    )
}

export default ViewList
