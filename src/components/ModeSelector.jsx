import React, { useState } from 'react'
import RadioButton from './RadioButton';
const ModeSelector = (props) => {
    const [mode, setMode] = useState('name');
    props.onMode(mode)

    return (
        <div className="mode-selector">
            <form>
                <RadioButton mode={mode} txt="א-ב" name="name" onChange={setMode}/>
                <RadioButton mode={mode} txt="שם המחבר" name="authorName" onChange={setMode}/>
            </form>
        </div>
    )
}

export default ModeSelector
