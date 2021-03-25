import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../context/context.js'
import './index.css'
import { setToken } from '../../lib/tokenControl.js'

const LogIn = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userSignIn, setUserSignIn] = useState({})
    const history = useHistory()
    const { user, setUser } = useContext(UserContext)

    const handleChangeEmail = (e) => {
        setUserEmail(e.target.value)
        setUserSignIn({
            ...userSignIn,
            email: e.target.value
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
        fetch('http://localhost:4000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.token) {
                setToken(res.token)
                setUser({
                    ...user,
                    userOn: true
                })
                history.push('/') 
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserEmail('')
        setUserPassword('')
        fetchPost(userSignIn)
    }

    return (
        <div className="signin">
            <form method="post" onSubmit={handleSubmit}>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="text" 
                        placeholder="Email"
                        value={userEmail} 
                        onChange={handleChangeEmail}
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="password"
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