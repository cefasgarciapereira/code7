import { useState } from 'react'

import code7, { uuid } from 'api/code7'

function ClientCard(props) {
    const { client, ...rest } = props
    const {
        id,
        name,
        email,
        website
    } = client
    const [loading, setLoading] = useState(false)

    function createDebt() {
        setLoading(true)
        code7.post(`/divida/${uuid}`, {
            idUsuario: id,
            motivo: 'Parcela 3 carro',
            valor: 199.99
        })
            .then(res => {
                console.log(res)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    return (
        <article {...rest}>
            <header>
                <h5>{name}</h5>
            </header>
            <p>{email}</p>
            <a href={website}>{website}</a>
            <footer className="client-card-actions">
                <button
                    onClick={createDebt}
                    disabled={loading}
                    aria-busy={loading}
                >
                    Aplicar Dívida
                </button>
            </footer>
        </article>
    )
}

export default ClientCard