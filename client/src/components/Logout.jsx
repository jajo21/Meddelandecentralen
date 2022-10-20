import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';

function Logout({ icon }) {
    const { logoutUser } = useContext(UserContext);
    return (
        <div className='navbar-button-div' onClick={() => logoutUser()}>{icon}</div>
    )
}

export default Logout