/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

import reactLogo from "./images/reactLogo.png"


function Header() {
    return(
        <header>
            <nav>
                <img src={reactLogo} width="40px" />
      Video 20
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

export default function Video20() {
    return (
    <div>
        <Header/>
        <MainBody/>
        <Footer/>
    </div>
    )
}