import React, { useState } from 'react'
import { http } from '../services/http.js'

const RandomAndAsk = () => {
    const [askBookMode, setAskBookMode] = useState(0)
    const [askBookText, setAskBookText] = useState('')
    const [classForm, setClassForm] = useState('form-name-book')
    const askTip = 'שלח בקשה לצירוף ספר למאגר תא שמע'
    const randomClickHandler = async () => {
        const id = await http.getRandomBook()
        const url = `book-${id.id}`
        window.location.hash = url
    }
    const submitHandler = async (event) => {
        event.preventDefault();
        if (askBookText.trim()) {
            await http.askBook(askBookText)
            setAskBookMode(2)
        } else {
            setClassForm('form-name-book red')
        }
    }
    if (askBookMode === 2) return (
        <div className="thanks random-and-ask">
            <span>
                תודה רבה על בקשתך
            </span>
            <button onClick={() => setAskBookMode(0)}>חזור</button>
        </div>
    )
    if (askBookMode === 1) return (
        <div className="ask-book random-and-ask">
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(event) => { setAskBookText(event.target.value); setClassForm('form-name-book') }} className={classForm} placeholder="שם הספר והמחבר" />
                <button>שלח</button>
                <button onClick={() => setAskBookMode(0)}>בטל</button>
            </form>
        </div>
    )
    return (
        <div className="random-ask random-and-ask">
            <button onClick={() => setAskBookMode(1)} title={askTip}>בקש ספר</button>
            <button onClick={randomClickHandler}>ספר אקראי</button>
        </div>
    )
}

export default RandomAndAsk
