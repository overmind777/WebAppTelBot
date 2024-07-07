import { useEffect, useState } from 'react';
import icon from './icons/swarmV1.svg'

import './App.css'

function App() {
    const tg = window.Telegram.WebApp
    const [userName, setUserName] = useState('')
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        // Expand the app to full screen
        tg.expand()

    }, [tg])

    const handleClickButton = () => {
        setUserName('Mother Fucker')
        setClicked(true)
        tg.sendData('Button clicked') // Example of sending data to Telegram
    }

    return (
        <div>
            <div>
                <svg width={40} height={40}>
            <use xlinkHref={`${icon}#icon-swarm`}></use>
                </svg>
                <button>Wallet</button>
            </div>
            <h1>Hello, {userName}</h1>
            <button onClick={handleClickButton}>Click me</button>
            {clicked && <p>Хулі ти клікаєш !!!</p>}
        </div>
    )
}

export default App
