import danielGalvez from './images/Daniel-Galvez.jpg'

export default function Navbar() {
    return (
        <>
            <div className='navbar'>
                <img src={danielGalvez} className='daniel'/>
                <div className='card-div'>
                    <h1>Daniel Galvez</h1>
                    <h3>Frontend Developer</h3>
                    <a href='url' className='href'>danielgalvez.website</a>
                    <div className='btns'>
                        <button className='mail-btn'>
                            <i className="fa-solid fa-envelope nav-logo"></i>
                            Email
                        </button>
                        <button className='linkedin-btn'>
                            <i className="fa-brands fa-linkedin nav-logo"></i>
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}