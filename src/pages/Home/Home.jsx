import { useState, useEffect } from 'react'

import { useFetch } from 'hooks'
import { ClientCard, SearchBar } from 'components'

import HomeLoading from './HomeLoading'

function Home() {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users')
    const [clients, setClients] = useState([])

    useEffect(() => {
        setClients(data)
    }, [data])

    if (loading) return <HomeLoading />

    return (
        <div className="container">
            <header>
                <SearchBar
                    placeholder="Busque um cliente pelo nome"
                    style={{ marginTop: 40 }}
                    data={data}
                    searchKey="name"
                    onSearch={(res) => setClients(res)}
                />
            </header>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
                {
                    clients &&
                    clients.map((client) =>
                        <div className="col">
                            <ClientCard className="p-3" client={client} key={client.id} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Home