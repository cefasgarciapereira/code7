import { toast } from 'react-toastify'

import { useFetch } from 'hooks'
import code7, { uuid } from 'api/code7'

import EditModal from './EditModal'

function DebtCard(props) {
    const { debt } = props
    const { data: user, loading } = useFetch(`https://jsonplaceholder.typicode.com/users/${debt.idUsuario}`)

    function handleDelete() {
        code7.delete(`/divida/${debt._id}/${uuid}`)
            .then(() => {
                toast.success(`Dívida ${debt._id} excluída`)
                window.location.reload(false);
            })
            .catch((err) => toast.error(`Falha ao excluír a dívida: ${err}`))
    }

    return (
        <article>
            <header>
                <h4>
                    {loading ? 'Buscando usuário' : user.name}
                </h4>
            </header>
            <p>R$ {parseFloat(debt.valor).toFixed(2)}</p>
            <p>{debt.motivo}</p>
            <footer>
                <div className="footer-inner">
                    {
                        !loading &&
                        <>
                            <button className="secondary" onClick={handleDelete}>Excluir</button>
                            <EditModal debt={{ ...debt, ...user }} />
                        </>
                    }
                </div>
            </footer>
        </article>
    )
}

export default DebtCard