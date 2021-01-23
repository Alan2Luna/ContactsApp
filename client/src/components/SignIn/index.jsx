import React from 'react'
import './index.css'

const LogIn = () => (
    <div className="container__signin">
        <div className="signin">
            <form action="">
                <div className="input__container">
                    <input className="input__control" type="text" placeholder="User"/>
                </div>
                <div className="input__container">
                    <input className="input__control" type="password" placeholder="Password" />
                </div>
                <div className="input__container">
                    <input className="input__control submit" type="submit" value="Sign In"/>
                </div>
            </form>
            <div className="line"></div>
            <div className="input__container">
                <a className="btn-signup" href="">Register</a>
            </div>
        </div>
    </div>
)

export default LogIn