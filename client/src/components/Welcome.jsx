import React from 'react'
import './css/welcome.css'

function Welcome({ user }) {
    return (
        <div className='welcome-user'>
            <div className='circle'>
                <span className='profile-picture'>Picture</span>
            </div>
            <h2 className='welcome'>Välkommen {user}!</h2>
        </div>
    )
}

export default Welcome