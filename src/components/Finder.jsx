import React,{useEffect,useRef} from 'react'
import { http } from '../services/http.js'

const Finder = (props) => {
    const textInput = useRef(null);
    const clearHandler = props.onClear
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
    useEffect(() => {
        window.addEventListener('hashchange', () => {
            textInput.current.value = '';
        })
    }, [])

    return (
        <div className="find">
            <input type="text" ref={textInput}  placeholder="חפש שם ספר או מחבר" onChange={changeHandler} />
        </div>
    )
}

export default Finder
