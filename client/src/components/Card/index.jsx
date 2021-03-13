import React from 'react'
import './index.css'
import Button from '../Button'

const Card = ({ fullname, email, phone }) => (
    <div className="card">
        <h2 className="card__name">{fullname}</h2>
        <p className="card__p">{email}</p>
        <p className="card__p">{phone}</p>
        <div className="container__buttons">
            <Button type={"edit"} text={"Editar"} />
            <Button type={"delete"} text={"Eliminar"} />
        </div>
    </div>
)

export default Card;