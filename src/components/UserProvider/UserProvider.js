import React, { createContext, useState } from 'react'

export const UserContext = createContext({ nome: '' })

function UserProvider({ children }) {
    const [user, setUser] = useState('')

    const login = name => {
        setUser(name)
    }

    return (
        <UserContext.Provider value={{ user, login }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider