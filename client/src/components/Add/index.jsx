import React from 'react'
import './index.css'

const Add = () => {
    return (
        <div className="add">
            <form method="post" action="http://localhost:4000/contacts/add">
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="text" 
                        placeholder="Fullname"
                        name="fullname"
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="text" 
                        name="email"
                        placeholder="Email" 
                    />
                </div>
                <div className="input__container">
                    <input 
                        className="input__control" 
                        type="text" 
                        placeholder="Phone"
                        name="phone"
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