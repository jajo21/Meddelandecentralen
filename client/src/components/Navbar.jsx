import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faMessage, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import './css/navbar.css';

function Navbar({ setShowAddPost, setShowAddFilter }) {
    const { logoutUser } = useContext(UserContext);
    return (
        <nav className='navbar'>
            <div title='Logga ut' className='navbar-button-div' onClick={() => logoutUser()}>
                <FontAwesomeIcon className='navbar-icon' icon={faArrowRightFromBracket} />
            </div>
            <div title='Filtrera inlägg' className='navbar-button-div' onClick={() => {
                setShowAddFilter(prevState => !prevState)
                setShowAddPost(prevState => {
                    if (prevState) return !prevState
                })
            }
            }>
                <FontAwesomeIcon className='navbar-icon' icon={faFilter} />
            </div>
            <div title='Lägg till inlägg' className='navbar-button-div' onClick={() => {
                setShowAddPost(prevState => {
                    if (!prevState) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    return !prevState
                })
                setShowAddFilter(prevState => {
                    if (prevState) return !prevState
                })
            }}>
                <FontAwesomeIcon className='navbar-icon' icon={faMessage} />
            </div>
        </nav>
    )
}

export default Navbar