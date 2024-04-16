import './Video22styles.css'
import reactLogo from './images/reactLogo.png'

export default function Header() {
    return (
        <header>
            <nav className="nav-items">
                <img src={reactLogo} className="logo"  />
                    Video 22

                <ul className="ul">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}