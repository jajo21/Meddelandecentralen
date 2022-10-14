import React from 'react'
import { sendPost } from '../service/post'

function AddPost({ connection, user, post, roomId, setUser, setPost, setRoomId, rooms }) {
    return (
        <>
            <br />
            <input
                type="text"
                value={user}
                onChange={e => setUser(e.target.value)}
            />

            <input
                type="text"
                value={post}
                onChange={e => setPost(e.target.value)}
            />

            <select
                name="room"
                onChange={e => setRoomId(e.target.value)}
            >
                <option value={null}>Inget rum</option>
                {
                    rooms.map(room => {
                        return (
                            <option key={room.id} value={room.id}>{room.name}</option>
                        )
                    })
                }
            </select>

            <button onClick={() => sendPost(connection, user, post, roomId)}>Send</button>
            <br /><br />
        </>
    )
}

export default AddPost