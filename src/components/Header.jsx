import React from 'react'
import ModeSelector from '../components/ModeSelector'
import Find from '../components/Finder'
import { baseUrl } from '../services/config'
import ReplyArrow from '../img/ReplyArrow.svg'
const Header = (props) => {
    return (
        <div className="header">
            <div className="find-header">
                <a href={baseUrl}>
                    <img src={ReplyArrow} className="back-img" alt=""/>
                    </a>
                <Find onClear={props.onClear} onFind={props.onFind} />
            </div>
            <ModeSelector onMode={props.onMode} />
        </div>
    )
}

export default Header
