import React from 'react'
import './index.css'

const Button = ({ text, type }) => {
    const buttonType = type ? ` ${type}` : ''
    return (
        <a className={`button${buttonType}`} href="#">{text}</a>
    )
}

export default Button