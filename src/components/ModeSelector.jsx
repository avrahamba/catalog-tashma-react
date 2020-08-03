import React, { useState } from 'react'

const ModeSelector = (props) => {
    const [mode, setMode] = useState('name');
    props.onMode(mode)

    return (
        <div className="mode-selector">
            <form>
                <div className="radio">
                    <label>
                        <input type="radio" value="name" name="modeSelect"
                            checked={mode === 'name'}
                            onChange={() => setMode('name')} />
                        א-ב
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="authorName" name="modeSelect"
                            checked={mode === 'authorName'}
                            onChange={() => setMode('authorName')} />
                        שם המחבר
                    </label>
                </div>
            </form>
        </div>
    )
}

export default ModeSelector
