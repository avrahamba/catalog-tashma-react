import React,{ useState} from 'react'
const RadioButton = (props) => {
const {mode,txt,name ,onChange}=props

    const [active,setActive] = useState('');

const checkHandler = (event) => {
    console.log('event :>> ', name,event);
    onChange(name)
}

    return (
        <div className={mode === name?'radio-button active':'radio-button'}> 
            <input type="radio" 
                value={name} 
                name="modeSelect"
                checked={mode === name}
                onChange={checkHandler } 
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
