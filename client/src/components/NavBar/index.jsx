import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/context.js'
import { deleteToken } from '../../lib/tokenControl.js'
import './index.css'


const NavBar = ({ handleOpenNavBar }) => {
    const { user, setUser } = useContext(UserContext)

    const handleLogOut = () => {
        handleOpenNavBar()
        deleteToken()
        setUser(false)
    }

    return (
        <nav className="navbar">
            <ul>
                {
                    user ?
                        <>
                        <li className="navbar__item"><Link onClick={handleOpenNavBar} to="/">Home</Link></li>
                        <li className="navbar__item"><Link onClick={handleOpenNavBar} to="/contacts/add">Add</Link></li>
                        <li className="navbar__item"><Link onClick={handleLogOut} to="/">Logout</Link></li>
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