
import { useState, useEffect } from 'react'

import { useFetch } from 'hooks'
import { baseUrl as code7Url, uuid } from 'api/code7'
import { SearchBar, DebtCard } from 'components'

import DebtLoading from './DebtLoading'

function Debts() {
    const { data, loading } = useFetch(`${code7Url}/divida/${uuid}`)
    const [debts, setDebts] = useState([])

    useEffect(() => {
        if (data && data.result) {
            setDebts(data.result)
        }
    }, [data])

    if (loading) return <DebtLoading />

    return (
        <div className="container">
            <header>
                <h4>Dívidas</h4>
            </header>
            <SearchBar
                placeholder="Busque uma dívida pelo motivo"
                data={data.result}
                searchKey="motivo"
                onSearch={(res) => setDebts(res)}
            />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
                {
                    debts &&
                    !loading &&
                    !debts.length > 0 &&
                    <div className="col">Nenhuma dívida foi encontrada</div>
                }
                {
                    debts &&
                    debts.map((debt) =>
                        <div className="col">
                            <DebtCard debt={debt} key={debt.id} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Debts