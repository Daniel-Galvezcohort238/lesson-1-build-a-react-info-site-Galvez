/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

    import reactLogo from "./images/reactLogo.png"


export default function Video18() {
    return (
        <>
            <header>
                <nav>
                    <img src={reactLogo} width="40px" />
      Video 18
                </nav>
            </header>
            <h1>Why i'm excited to be learning React</h1>
            <ol>
                <li>It is faster to build more content with because of its composability</li>
                <li>It is easier to build more content with because of it is declarative</li>
                <li>Also i'll be able to fit in with the cool kids</li>
            </ol>
            <footer>© 20xx Galvez development. All rights reserved.</footer>
        </>
    )
}