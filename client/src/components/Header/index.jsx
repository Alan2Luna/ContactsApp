import React from 'react'
import NavBar from '../NavBar'
import MenuHamburger from '../MenuHamburger'
import './index.css'

const Header = () => {
    return (
        <header className="header">
            <a className="logo" href="#">
                <h1>ContactsApp</h1>
            </a>
            <MenuHamburger />
            <NavBar />
        </header>
    )
}

export default Header;