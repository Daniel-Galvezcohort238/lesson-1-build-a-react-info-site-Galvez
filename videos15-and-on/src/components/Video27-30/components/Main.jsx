import './styles.css'
import reactLogoGray from './images/react-logo-gray.jpg'

export default function Main() {
    return (
        <>
            <div className='main-content-plus'>
                <div className='main-content'>
                    <h1>Fun facts about React</h1>
                    <ul className='video27-ul'>
                        <li className='video27-li'>Was first released in 2013</li>
                        <li className='video27-li'>Was originally created by Jordan Walke</li>
                        <li className='video27-li'>Has well over 100K start on GitHub</li>
                        <li className='video27-li'>Is maintained by Facebook</li>
                        <li className='video27-li'>Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </div>
                <img src={reactLogoGray} className='logo-gray'/>
            </div>
        </>
    )
}