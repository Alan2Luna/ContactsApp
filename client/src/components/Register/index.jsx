import React, { useState } from 'react'
import './index.css'

const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChangeName = (e) => {

    }
    const handleChangeLastName = (e) => {

    }
    const handleChangePassword = (e) => {

    }
    const handleChangeRepeatPassword = (e) => {

    }
    const handleChangeEmail = (e) => {

    }

    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <div className="input__container">
                    <input className="input__control" type="text" placeholder="First name"/>
                </div>
                <div className="input__container">
                    <input className="input__control" type="text" placeholder="Last name"/>
                </div>
                <div className="input__container">
                    <input className="input__control" type="password" placeholder="Password"/>
                </div>
                <div className="input__container">
                    <input className="input__control" type="password" placeholder="Repeat password"/>
                </div>
                <div className="input__container">
                    <input className="input__control" type="email" placeholder="example@email.com"/>
                </div>
                <div className="input__container">
                    <input className="input__control submit" type="submit" value="Register"/>
                </div>
            </form>
        </div>
    )
}

export default Register