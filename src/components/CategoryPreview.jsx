import React from 'react'
import { baseUrl } from '../services/config'

function ViewPreview(props) {
    return (
        <div className="view-preview">
            <a href={baseUrl+'#category-' + props.category.ID}>
                {props.category.name}
            </a>
        </div>
    )
}

export default ViewPreview
