import React from 'react'
import './index.css'
import Button from '../Button'

const Card = () => (
    <div className="card">
        <h2 className="card__name">Nombre y apellido</h2>
        <p className="card__p">telefono</p>
        <p className="card__p">correo</p>
        <div className="container__buttons">
            <Button type={"edit"} text={"Editar"} />
            <Button type={"delete"} text={"Eliminar"} />
        </div>
    </div>
)

export default Card;