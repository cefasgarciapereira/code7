import '@picocss/pico'
import 'styles/global.css'
import 'styles/custom.css'
import 'styles/grid-system.css'

import { BrowserRouter } from "react-router-dom"

import Routes from './Routes'
import { ThemeSwitcher } from 'elements'

function App() {
    return (
        <BrowserRouter>
            <Routes />
            <ThemeSwitcher />
        </BrowserRouter>
    )
}

export default App