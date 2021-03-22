import React, { useState } from 'react'
import './index.css'

const Add = () => {
    const [newContact, setNewContact] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http:localhost:4000/add', {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }

    const handleInputs = (e) => {
        setNewContact({
            ...newContact, 
            [e.target.name] : e.target.value
        })
    }


    return (
        <div className="add">
            <form onSubmit={handleSubmit}>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="text" 
                        placeholder="Fullname"
                        name="fullname"
                        onChange={handleInputs}
                        value={newContact.fullname || ''}
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="text" 
                        name="email"
                        placeholder="Email" 
                        name="email"
                        onChange={handleInputs}
                        value={newContact.email || ''}
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="text" 
                        placeholder="Phone"
                        name="phone"
                        onChange={handleInputs}
                        value={newContact.phone || ''}
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control submit" 
                        type="submit" 
                        value="Add"
                    />
                </div>
            </form>
        </div>
    )
}

export default Add