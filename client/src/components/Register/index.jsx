import React from 'react'
import './index.css'

const Register = () => (
    <div className="container__register">
        <div className="register">
            <form action="">
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
                    <input className="input__control submit" type="submit" value="Register"/>
                </div>
            </form>
        </div>
    </div>
)

export default Register