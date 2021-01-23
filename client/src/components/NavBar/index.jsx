import React from 'react';
import './index.css'

const NavBar = () => (
    <nav className="navbar">
        <ul>
            <li className="navbar__item"><a href="#">item1</a></li>
            <li className="navbar__item" ><a href="#">sign in</a></li>
            <li className="navbar__item"><a href="#">register</a></li>
        </ul>
    </nav>
)

export default NavBar;