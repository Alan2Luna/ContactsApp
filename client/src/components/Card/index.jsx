import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/context'
import { getToken } from '../../lib/tokenControl'
import Modal from '../Modal/'
import './index.css'

const Card = ({ id, fullname, email, phone }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, setUser } = useContext(UserContext)
    const { contacts } = user
    const token = getToken()

    const handleContacts = () => {
        const newContacts = contacts.filter(contact => contact.id !== id)
        return newContacts
    }
 
    const handleDelete = (id) => {
        fetch(`http://localhost:4000/contacts/delete/${id}`, {
            method: "delete",
            headers: {
                'Content-type': 'application/json',
                'authorization': `BEARER ${token}`
            }
        }).then(res => {
            if(res.status == 202) {
                const newContacts = handleContacts(id)
                setUser({
                    ...user,
                    contacts: newContacts
                })
            }
        })
          .catch(error => console.log(error))
    }

    const handleOpenModal = () => {
        if(isOpen) {
            setIsOpen(false)
            const scroll = document.body.style.overflowY = ""
            return scroll
        } else {
            setIsOpen(true)
            const scroll = document.body.style.overflowY = "hidden";
            return scroll
        }
    }
        
    return (
        <div className="card">
            <h2 className="card__name">{fullname}</h2>
            <p className="card__p">{email}</p>
            <p className="card__p">{phone}</p>
            <div className="container__buttons">
                <button onClick={handleOpenModal} className="button edit" type="button">Edit</button>
                <button onClick={() => handleDelete(id)} className="button delete" type="button">Eliminar</button>
            </div>
            <Modal open={isOpen} handleOpen={handleOpenModal} />
        </div>
    )    
}

export default Card