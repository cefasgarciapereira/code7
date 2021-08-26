import { ThemeSwitcher, Github } from 'elements'

function BaseLayout({ children }) {
    return (
        <div className="base-layout">
            <nav className="base-nav">
                <ul>
                    <strong>code7</strong>
                </ul>
                <ul>
                    <Github />
                    <ThemeSwitcher />
                </ul>
            </nav>
            <aside className="base-aside">
                <strong>Serviços</strong>
                <ul>
                    <li><a href="/">Clientes</a></li>
                    <li><a href="/dividas">Dívidas</a></li>
                </ul>
            </aside>
            <div className="base-children">
                {children}
            </div>
        </div>
    )
}

export default BaseLayout