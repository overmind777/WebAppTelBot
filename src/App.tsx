import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

function App() {
    const tg = window.Telegram.WebApp

    useEffect(() => {
        // Expand the app to full screen
        tg.expand()

    }, [tg])

    return (
        <RouterProvider router={router} />
    )
}

export default App
