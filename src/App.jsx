import '@picocss/pico'
import 'styles/global.css'
import 'styles/custom.css'

import { BrowserRouter } from "react-router-dom"

import Routes from './Routes'
import { ThemeSwitcher } from 'components'

function App() {
    return (
        <BrowserRouter>
            <Routes />
            <ThemeSwitcher />
        </BrowserRouter>
    )
}

export default App