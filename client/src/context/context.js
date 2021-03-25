import React, { useState } from 'react'

export const UserContext = React.createContext({})

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        userOn: false,
        contacts: []
    })

    return <UserContext.Provider value={{user, setUser}}>
        {props.children}
    </UserContext.Provider>
}