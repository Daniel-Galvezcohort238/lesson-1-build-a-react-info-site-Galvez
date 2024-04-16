import './styles.css'
import reactLogo from './images/react-logo-black.png'

export default function Navbar() {
    return (
        <> 
            <nav>
                <div className='title'>
                    <img src={reactLogo} className='logo' />
                    <h2>ReactFacts</h2>
                </div>
                <h3>React Course - Project 1</h3>
            </nav>
        </>
    )
}