/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
  - Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/

import reactLogo from "./images/reactLogo.png"
import './Video21styles.css'

function Header() {
    return(
        <header>
            <nav className="nav-items">
                <img src={reactLogo} className="logo"  />
                Video 21

                <ul className="ul">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainBody() {
    return (
        <>
            <h1>Why i'm excited to be learning React</h1>
            <ol>
                <li>It is faster to build more content with because of its composability</li>
                <li>It is easier to build more content with because of it is declarative</li>
                <li>Also i'll be able to fit in with the cool kids</li>
            </ol>
        </>
    )
}

function Footer() {
    return(
        <footer>
            <small>© 2021 Galvez development. All rights reserved.</small>
        </footer>
    )
}

export default function Video21() {
    return (
    <div>
        <Header/>
        <MainBody/>
        <Footer/>
    </div>
    )
}