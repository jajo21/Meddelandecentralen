import React, { useContext } from 'react'
import ConnectionContext from '../contexts/ConnectionContext';
import { addRoom } from '../services/room'

import './css/addroom.css';

function AddRoom({ newRoom, setNewRoom, setShowAddRoom }) {
    const { connection, error, setError } = useContext(ConnectionContext);
    return (
        <div className='add-room'>
            <div className='add-room-header'>
                <h3>Lägg till rum</h3>
                <div className='add-room-close' alert='Stäng' onClick={() => setShowAddRoom(prevState => !prevState)}> X </div>
            </div>
            <input
                type="text"
                className='add-room-input'
                placeholder='Namn'
                value={newRoom}
                onChange={e => {
                    setNewRoom(e.target.value)
                    setError(null);
                }}
            />
            {error && <p>{error}</p>}

            <button className='save-room-button' onClick={() => {
                addRoom(connection, newRoom);
                setShowAddRoom(prevState => !prevState);
            }
            }>Spara</button>
        </div>
    )
}

export default AddRoom