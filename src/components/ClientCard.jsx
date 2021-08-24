function ClientCard(props) {
    const { client, ...rest } = props
    const {
        name,
        email,
        website
    } = client

    return (
        <article {...rest}>
            <header>
                <h5>{name}</h5>
            </header>
            <p>{email}</p>
            <a href={website}>{website}</a>
            <footer className="client-card-actions">
                <button>Aplicar Dívida</button>
            </footer>
        </article>
    )
}

export default ClientCard