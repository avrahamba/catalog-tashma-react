import React, { useState } from 'react'
import RadioButton from './RadioButton'
const Menu = (props) => {

    const [mode, setMode] = useState('categories');
    const { canngeMode } = props
    const modeHandler = (evMode) => {
        canngeMode(evMode)
        setMode(evMode)
    }
    return (
        <div className="menu">
            <form>
                <RadioButton mode={mode} txt="סוגה" name="categories" onClick={modeHandler}/>
                <RadioButton mode={mode} txt="א-ב" name="ab" onClick={modeHandler}/>
            </form>
        </div>
    )
}

export default Menu
