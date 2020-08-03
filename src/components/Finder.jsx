import React, { useEffect, useState } from 'react'
import { http } from '../services/http.js'

const Finder = (props) => {
    const clearHandler = props.onClear
    const [results, setResults] = useState(null)
    const changeHandler = (e) => {
        init(e.target.value)
    }
    const init = async (textToFind) => {
        if (textToFind) {
            const res = await http.getFind(textToFind)
            if (res?.authors || res?.books) clearHandler(true)
            else clearHandler(false)

            props.onFind(res)
        }
        else {
            props.onFind(null)
            clearHandler(false)
        }
    }

    return (
        <div className="find">
            <input type="text" placeholder="חפש" onChange={changeHandler} />
        </div>
    )
}

export default Finder
