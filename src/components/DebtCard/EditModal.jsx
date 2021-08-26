import { useState } from 'react'
import { toast } from 'react-toastify'

import { Modal } from 'elements'
import code7, { uuid } from 'api/code7'

function EditModal(props) {
    const { debt } = props
    const [values, setValues] = useState(debt)

    function editDebt() {
        code7.put(`/divida/${debt._id}/${uuid}`, values)
            .then(() => {
                toast.success(`Dívida editada com sucesso`)
                window.location.reload(false);

            })
            .catch((err) => toast.error(`Falha ao editar a dívida: ${err}`))
    }

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Modal
            title="Editar Dívida"
            trigger={<button>Editar</button>}
            onConfirm={editDebt}
        >
            <form onSubmit={editDebt}>
                <label htmlFor="name">Nome do Cliente</label>
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
                    <label htmlFfor="motivo">
                        Motivo
                        <input
                            type="text"
                            id="motivo"
                            name="motivo"
                            placeholder="Motivo"
                            value={values.motivo}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="valor">
                        Valor (R$)
                        <input
                            type="text"
                            id="valor"
                            name="valor"
                            placeholder="Valor"
                            value={values.valor}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
            </form>
        </Modal>
    )
}

export default EditModal