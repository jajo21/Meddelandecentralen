import React from 'react'

function AddRoom({ addRoom, newRoom, setNewRoom }) {
    return (
        <>
            <input
                type="text"
                value={newRoom}
                onChange={e => setNewRoom(e.target.value)}
            />

            <button onClick={() => addRoom(newRoom)}>Lägg till rum</button>
        </>
    )
}

export default AddRoom