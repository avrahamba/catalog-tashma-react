import React, { useState } from 'react'
import RadioButton from './RadioButton';
const ModeSelector = (props) => {
    const [mode, setMode] = useState('name');
    return (
        <div className="mode-selector">
            <span>מיין לפי: </span>
            <RadioButton mode={mode} txt="א-ב" name="name" onClick={(evMode)=>{props.onMode(evMode);setMode(evMode)}} />
            <RadioButton mode={mode} txt="שם המחבר" name="authorName" onClick={(evMode)=>{props.onMode(evMode);setMode(evMode)}} />
        </div>
    )
}

export default ModeSelector
