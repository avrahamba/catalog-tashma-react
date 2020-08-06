import React from 'react'
import { baseUrl } from '../services/config'

function ViewPreview(props) {
    return (
        <a href={baseUrl + '#category-' + props.category.ID}>
            <div className="category-preview">
                <span>
                    {props.category.name}
                </span>
            </div>
        </a>
    )
}

export default ViewPreview
