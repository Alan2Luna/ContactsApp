import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const LogIn = () => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userSignIn, setUserSignIn] = useState({})

    const handleChangeName = (e) => {
        setUserName(e.target.value)
        setUserSignIn({
            ...userSignIn,
            name: e.target.value
        })
    }

    const handleChangePassword = (e) => {
        setUserPassword(e.target.value)
        setUserSignIn({
            ...userSignIn,
            password: e.target.value
        })
    }

    const fetchPost = (data) => {
        fetch('http://localhost:4000/add', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserName('')
        setUserPassword('')
        fetchPost(userSignIn)
    }

    return (
        <div className="signin">
            <form method="post" action="http://localhost:4000/add">
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="text" 
                        placeholder="User"
                        name="nombre"
                        value={userName} 
                        onChange={handleChangeName}
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="password" 
                        name="contraseña"
                        placeholder="Password" 
                        value={userPassword}
                        onChange={handleChangePassword}
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control submit" 
                        type="submit" 
                        value="Sign In"
                    />
                </div>
            </form>
            <div className="line"></div>
            <div className="input__container">
                <Link className="btn-signup" to="/Register">Register</Link>
            </div>
        </div>
    )
}

export default LogIn