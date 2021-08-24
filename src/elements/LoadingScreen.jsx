import { useEffect } from 'react'

function LoadingScreen() {

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.getElementById('indeterminate-progress').indeterminate = true;
        }
    }, [])

    return (
        <main className="full-page container center">
            <progress id="indeterminate-progress"></progress>
        </main>
    )
}

export default LoadingScreen