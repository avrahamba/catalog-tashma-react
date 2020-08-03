import React from 'react'
import ModeSelector from '../components/ModeSelector'
import Find from '../components/Finder'
import {baseUrl} from '../services/config'
const Header = (props) => {
    return (
        <div className="header">
            <a href={baseUrl}>home</a>
            <Find onClear={props.onClear} onFind={props.onFind}/>
            <ModeSelector onMode={props.onMode} />
        </div>
    )
}

export default Header
