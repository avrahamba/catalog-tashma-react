import React, { useState } from 'react'
import { http } from '../services/http.js'

const RandomAndAsk = () => {
    const [askBookMode, setAskBookMode] = useState(0)
    const [askBookText, setAskBookText] = useState('')

    const randomClickHandler = async () => {
        const id = await http.getRandomBook()
        const url = `book-${id.id}`
        console.log('url', url)
        window.location.hash = url
    }
    const submitHandler = async (event) => {
        event.preventDefault();
        await http.askBook(askBookText)
        setAskBookMode(2)
    }

    if (askBookMode === 2) return (
        <div>
            תודה רבה על בקשתך
        </div>
    )
    if (askBookMode === 1) return (
        <div>
            <form onSubmit={submitHandler}>

                <input type="text" onChange={(event) => setAskBookText(event.target.value)} className="form-name-book" placeholder="הכנס שם ספר" />
                <button>שלח</button>
            </form>
        </div>
    )

    return (
        <div>
            <button onClick={() => setAskBookMode(1)}>בקש ספר</button>
            <button onClick={randomClickHandler}>ספר אקראי</button>
        </div>
    )
}

export default RandomAndAsk
