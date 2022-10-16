import React from 'react'
import { addRoom } from '../service/room'

function AddRoom({ connection, newRoom, setNewRoom, error, setError }) {
    return (
        <>
            <input
                type="text"
                value={newRoom}
                onChange={e => {
                    setNewRoom(e.target.value)
                    setError(null);
                }}
            />
            {error && <p>{error}</p>}

            <button onClick={() => addRoom(connection, newRoom)}>Lägg till rum</button>
        </>
    )
}

export default AddRoom