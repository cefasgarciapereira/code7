import 'react-toastify/dist/ReactToastify.min.css'
import '@picocss/pico'
import 'styles/animations.css'
import 'styles/base-layout.css'
import 'styles/custom.css'
import 'styles/global.css'
import 'styles/grid-system.css'

import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'

import Routes from './Routes'
import { BaseLayout } from 'components'

function App() {
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{
                    fontSize: '.75rem'
                }}
            />
            <BaseLayout>
                <Routes />
            </BaseLayout>
        </BrowserRouter>
    )
}

export default App