import React from 'react'
import '../css/Header.css'

function Header() {
    return (
        <div id='header'>
            <img id='craftastic-logo' src='./logo/Craftastic3.png'/>
            <input id='search' placeholder='Search for item'/> 
            <img id='search-icon' src='./logo/search-icon.jpg' alt=''/> 
            <img id='cart' src='./logo/cart.png' alt=''/> 
            <img id='wishlist' src='./logo/wishlist.png' alt=''/> 
        </div>
    )
}

export default Header
