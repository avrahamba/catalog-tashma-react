import React from 'react'
import { baseUrl } from '../services/config'

function ViewPreview({category}) {
    return (
       <a href={ category.mode==='categories'?baseUrl + '#category-' + category.ID:baseUrl + '#ab-' + category.name}>
            <div className="category-preview">
                <span>
                    {category.name}
                </span>
            </div>
        </a>
    )
}

export default ViewPreview
