import React from 'react'
const RadioButton = (props) => {
    const { mode, txt, name, onClick } = props

    return (
        <div className={mode === name ? 'radio-button active' : 'radio-button'} onClick={() => {  onClick(name) }}>
            <input type="radio"
                value={name}
                name="modeSelect"
                ></input>
            <div className="item">
                <span>{txt}</span>
            </div>
        </div>
    )
}

export default RadioButton
