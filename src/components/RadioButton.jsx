import React from 'react'
const RadioButton = (props) => {
    const { mode, txt, name, onClick } = props

    return (
        <div className={mode === name ? 'radio-button active' : 'radio-button'} onClick={() => { onClick(name) }}>
            <input type="radio"
                value={name}
                name="modeSelect"
                checked={mode === name}

                tabindex="0"
                fieldid="264"
                input-aria-required="0"
                value="0"></input>
            <div className="item">

                <span>{txt}</span>
            </div>
        </div>
    )
}

export default RadioButton
