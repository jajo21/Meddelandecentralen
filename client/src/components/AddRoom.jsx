import React, { useContext } from 'react'
import ConnectionContext from '../contexts/ConnectionContext';
import { addRoom } from '../service/room'

function AddRoom({ newRoom, setNewRoom }) {
    const { connection, error, setError } = useContext(ConnectionContext);
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