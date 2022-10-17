import React, { useEffect, useContext } from 'react'
import { addPost } from '../service/post'
import UserContext from '../contexts/UserContext';

function AddPost({ connection, post, roomId, setPost, setRoomId, rooms }) {
    const { user } = useContext(UserContext);
    useEffect(() => {
        if (rooms.length > 0) {
            setRoomId(rooms[0].id)
        }
    }, [rooms]);

    return (
        <>
            <br />

            <input
                type="text"
                value={post}
                onChange={e => setPost(e.target.value)}
            />

            <select
                name="room"
                onChange={e => setRoomId(e.target.value)}
            >
                {rooms.map(room => {
                    return (
                        <option key={room.id} value={room.id}>{room.name}</option>
                    )
                })
                }
            </select>

            <button onClick={() => addPost(connection, user, post, roomId)}>Send</button>
            <br /><br />
        </>
    )
}

export default AddPost