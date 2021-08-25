import { useState } from 'react'
import { toast } from 'react-toastify'

import { Modal } from 'elements'
import code7, { uuid } from 'api/code7'

function ClientCard(props) {
    const { client, ...rest } = props
    const [values, setValues] = useState(client)

    async function createDebt() {
        const body = {
            idUsuario: values.id,
            motivo: values.reason,
            valor: parseFloat(values.price)
        }

        code7.post(`/divida/${uuid}`, body)
            .then(() => toast.success(`Dívida criada para ${client.name}`))
            .catch((err) => toast.error(`Falha ao criar dívida: ${err}`))
    }

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <article {...rest}>
            <header>
                <h5>{values.name}</h5>
            </header>
            <p>{values.email}</p>
            <a href={values.website}>{values.website}</a>
            <footer className="client-card-actions">
                <Modal
                    title="Aplicar Dívida"
                    trigger={<button>Aplicar Dívida</button>}
                    onConfirm={createDebt}
                >
                    <form onSubmit={createDebt}>
                        <label for="name">Nome do cliente</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nome do cliente"
                            value={values.name}
                            disabled
                            required
                        />
                        <small>Este campo não pode ser alterado.</small>
                        <div className="grid">
                            <label for="reason">
                                Motivo
                                <input
                                    type="text"
                                    id="reason"
                                    name="reason"
                                    placeholder="Motivo"
                                    value={values.reason}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label for="price">
                                Valor (R$)
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    placeholder="Valor"
                                    value={values.price}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    </form>
                </Modal>
            </footer>
        </article>
    )
}

export default ClientCard