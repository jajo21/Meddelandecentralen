import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';

function Logout() {
    const { logoutUser } = useContext(UserContext);
    return (
        <button onClick={() => logoutUser()}>Logga ut</button>
    )
}

export default Logout