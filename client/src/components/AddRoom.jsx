import React from 'react'
import { addRoom } from '../service/room'

function AddRoom({ connection, newRoom, setNewRoom }) {
    return (
        <>
            <input
                type="text"
                value={newRoom}
                onChange={e => setNewRoom(e.target.value)}
            />

            <button onClick={() => addRoom(connection, newRoom)}>Lägg till rum</button>
        </>
    )
}

export default AddRoom