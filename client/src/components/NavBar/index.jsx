import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/context.js'
import './index.css'

const NavBar = ({ handleOpenNavBar }) => {
    const { user } = useContext(UserContext)

    return (
        <nav className="navbar">
            <ul>
                {
                    user ?
                        <>
                        <li className="navbar__item"><Link onClick={handleOpenNavBar} to="/Home">Home</Link></li>
                        <li className="navbar__item"><Link onClick={handleOpenNavBar} to="/contacts/add">Add</Link></li>
                        <li className="navbar__item"><a to="">logout</a></li>
                        </>
                        :
                        <>
                        <li className="navbar__item" ><Link onClick={handleOpenNavBar} to="/SignIn">sign in</Link></li>
                        <li className="navbar__item"><Link onClick={handleOpenNavBar} to="/Register">register</Link></li>
                        </>
                }
            </ul>
        </nav>
)
}

export default NavBar;