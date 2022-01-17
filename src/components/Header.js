import React from 'react'
import '../css/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div id='header'>
            <img id='craftastic-logo' src='./logo/craftastic-logo.png'/>
            <input id='search' placeholder='Search for item'/> 
            <img id='search-icon' src='./logo/search-icon.jpg' alt=''/> 
            <img id='cart' src='./logo/cart.png' alt=''/> 
            <p id='cart-label'>Bag</p>
            <img id='wishlist' src='./logo/wishlist.png' alt=''/> 
            <p id='wishlist-label'>Wishlist</p>
            <img id='profile' src='./logo/profile.png' alt=''/> 
            <p id='profile-label'>Profile</p>
        </div>
    )
}

export default Header
