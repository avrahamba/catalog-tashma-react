import React from 'react'
import ModeSelector from '../components/ModeSelector'
import Find from '../components/Finder'

const Header = (props) => {
    return (
        <div className="header">
            <Find onClear={props.onClear} onFind={props.onFind}/>
            <ModeSelector onMode={props.onMode} />
        </div>
    )
}

export default Header
