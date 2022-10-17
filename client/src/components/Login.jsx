import React, { useContext } from 'react'

import UserContext from '../contexts/UserContext';

function Login() {
    const { user, setUser, loginUser } = useContext(UserContext);
    return (
        <>
            <h2>Skriv in användarnamn</h2>
            <input
                type="text"
                value={user}
                onChange={e => setUser(e.target.value)} />
            <button onClick={() => loginUser()}
            >Bekräfta</button>
        </>
    )
}

export default Login