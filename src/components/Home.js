import React from 'react'
import Header from './Header'
import '../css/Home.css'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <Header/>
            <img id='craftastic' src='./logo/craft.jpg'/>
            <p id='title'>Buy or sell hand-crafted items at one place</p>
            <a href='/signup'><button id='join'>Join Now</button></a>
            <Footer/> 
        </div>
    )
}

export default Home
