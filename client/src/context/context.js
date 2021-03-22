import React, { useState } from 'react'

export const UserContext = React.createContext({})

export const UserContextProvider = (props) => {
    const [user, setUser] = useState(false)

    return <UserContext.Provider value={{user, setUser}}>
        {props.children}
    </UserContext.Provider>
}