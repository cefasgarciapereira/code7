import { useEffect, useState } from 'react'
import { BiAdjust } from "react-icons/bi";

function ThemeSwitcher() {
    const [mode, setMode] = useState('light')

    useEffect(() => {
        const storedMode = localStorage.getItem('mode')
        if (storedMode === 'dark') {
            setMode('dark')
        } else {
            setMode('light')
        }
    }, [])

    useEffect(() => {
        document.querySelector('html')?.setAttribute('data-theme', mode);
    }, [mode]);

    function toggleTheme() {
        const newMode = () => mode === 'dark' ? 'light' : 'dark'
        setMode(newMode())
        localStorage.setItem('mode', newMode())
    }

    return (
        <button
            className="contrast switcher" 
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
        >
            <BiAdjust size="1.5em"/>
        </button>
    )
}

export default ThemeSwitcher