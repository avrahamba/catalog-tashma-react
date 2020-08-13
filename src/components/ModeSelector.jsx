import React, { useState } from 'react'
import RadioButton from './RadioButton';
const ModeSelector = (props) => {
    const [mode, setMode] = useState('name');
    props.onMode(mode)

    return (
        <div className="mode-selector">
            <span>מיין לפי: </span>
            <RadioButton mode={mode} txt="א-ב" name="name" onClick={setMode} />
            <RadioButton mode={mode} txt="שם המחבר" name="authorName" onClick={setMode} />
        </div>
    )
}

export default ModeSelector
