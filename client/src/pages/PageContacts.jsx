import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/context'
import './styles/PageContacts.css'
import Card from '../components/Card/'
import { getToken } from '../lib/tokenControl'

const PageContacts = () => {
    const { user, setUser } = useContext(UserContext)
    const { contacts } = user
    const token = getToken()

    useEffect(() => {
        fetch('http://localhost:4000/contacts/', {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `BEARER ${token}`
            }
        })
        .then(res => res.json())
        .then(res => 
            setUser({
                ...user,
                contacts: res.contacts
            }))
        .catch(error => console.log(error))
    }, [])
    
    return (
        contacts
            ?   <div className="container__contacts">
                    {
                        contacts.map(contact => (<Card key={contact.id} {...contact} />))
                    }
                </div>
            :   <div className="container__contacts">
                    <p>No tienes ningun contacto</p>
                </div>
    )
}

export default PageContacts