import React, { useContext } from 'react'

import UserContext from '../contexts/UserContext';
import './css/login.css';

function Login() {
    const { user, setUser, loginUser } = useContext(UserContext);
    return (
        <div className='login'>
            <h1 className='header-login'>Logga in</h1>
            <input
                type="text"
                className='login-input'
                placeholder='Användarnamn'
                value={user}
                onChange={e => setUser(e.target.value)} />
            <button className='login-button' onClick={() => loginUser()}
            >Logga in</button>
        </div>
    )
}

export default Login