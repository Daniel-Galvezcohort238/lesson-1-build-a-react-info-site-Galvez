/**
Challenge: move the  Header, Footer and MainContent components
into their own files.
*/

import Header from "./Header"
import MainBody from "./MainBody"
import Footer from "./Footer"

export default function Video21() {
    return (
    <div>
        <Header/>
        <MainBody/>
        <Footer/>
    </div>
    )
}