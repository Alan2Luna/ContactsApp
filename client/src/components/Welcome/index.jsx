import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Welcome = () => (
    <div className="welcome">
        <div className="welcome__box">
            <p>Bienvenido a <span>ContactsApp</span>. Empiza a registrar los datos mas importartes de tus amigos.</p>
            <div className="box__btn">
            <Link to="/SignIn">Sign In</Link>
            </div>
        </div>
    </div>
)

export default Welcome