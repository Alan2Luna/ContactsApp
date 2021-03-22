import React, { useState } from 'react'
import './index.css'

const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/register', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                password,
                email
            })
        }).then(res => res.json())
        .then(data => console.log(data))
        setFirstName('')
        setLastName('')
        setPassword('')
        setRepeatPassword('')
        setEmail('')
    }

    const handleRepeatPassword = (e) => {
        if(e.target.value == "") {
            setErrorPassword(false)
            setRepeatPassword(e.target.value)
        } else {
            let confirmation = e.target.value === password
            setRepeatPassword(e.target.value)
            setErrorPassword(!confirmation)
        }
    }

    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="text" name="firstName" 
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)} 
                        value={firstName}  
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="text" name="lastName" 
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)} 
                        value={lastName}
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="password" 
                        name="repeatPassword" 
                        placeholder="Repeat password"
                        onChange={handleRepeatPassword}
                        value={repeatPassword}
                    />
                    {
                        errorPassword && <span className="message__error">the password doesn't match</span>
                    }
                    
                </div>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="email" 
                        name="email" 
                        placeholder="example@email.com"
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control submit" 
                        type="submit" 
                        value="Register"
                    />
                </div>
            </form>
        </div>
    )
}

export default Register