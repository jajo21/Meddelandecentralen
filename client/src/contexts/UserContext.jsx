import React, { createContext, useState, useEffect } from 'react'
import { getUser, removeUser, saveUser } from '../service/user';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState('');
    const [hasUser, setHasUser] = useState(false);

    useEffect(() => {
        let u = getUser();
        if (u.length > 0) setHasUser(!hasUser);
    }, []);

    const logoutUser = () => {
        setHasUser(!hasUser);
        removeUser();
    }

    const loginUser = () => {
        setHasUser(!hasUser)
        saveUser(user);
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                hasUser,
                logoutUser,
                loginUser
            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext