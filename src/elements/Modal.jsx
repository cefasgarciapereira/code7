import { useState, cloneElement } from 'react'

function Modal(props) {
    const { title, trigger, confirm = 'Enviar', children, onConfirm } = props
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    function handleOpen() {
        setVisible(true)
    }

    function handleClose() {
        setVisible(false)
    }

    async function handleSubmit() {
        setLoading(true)
        await onConfirm()
        handleClose()
        setLoading(false)
    }

    const Trigger = (props) => cloneElement(trigger, props)

    return (
        <>
            <Trigger onClick={handleOpen} />
            {
                visible &&
                <div className="portal">
                    <article className="modal">
                        <header>
                            <h2>{title}</h2>
                        </header>
                        {children}
                        <footer className="modal-footer">
                            <button onClick={handleClose}>Cancelar</button>
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                aria-busy={loading}
                            >
                                {confirm}
                            </button>
                        </footer>
                    </article>
                </div>
            }
        </>
    )
}

export default Modal