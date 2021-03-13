import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
import MenuHamburger from '../MenuHamburger'
import './index.css'

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleOpenNavBar = () => setOpen(!open)

    return (
        <header className="header">
            <Link className="logo" to="/">
                <h1>ContactsApp</h1>
            </Link>
            <MenuHamburger 
                handleOpenNavBar={handleOpenNavBar}
                open={open}
            />
            <NavBar 
                handleOpenNavBar={handleOpenNavBar}
            />
        </header>
    )
}

export default Header;