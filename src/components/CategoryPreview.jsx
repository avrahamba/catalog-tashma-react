import React from 'react'

function ViewPreview(props) {
    return (
        <div className="view-preview">
            <a href={'/catalog/#category-' + props.category.ID}>
                {props.category.name}
            </a>
        </div>
    )
}

export default ViewPreview
