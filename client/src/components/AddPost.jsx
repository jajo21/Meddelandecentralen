import React, { useEffect, useContext } from 'react'
import { addPost } from '../services/post'
import UserContext from '../contexts/UserContext';
import ConnectionContext from '../contexts/ConnectionContext';

function AddPost({ post, roomId, setPost, setRoomId, showAddRoom, setShowAddRoom }) {
    const { user } = useContext(UserContext);
    const { connection, rooms } = useContext(ConnectionContext);

    //Elementet select nere i return får värdet 0 om denna useeffect inte finns
    useEffect(() => {
        if (rooms.length > 0) {
            setRoomId(rooms[0].id)
        }
    }, [rooms]);

    return (
        <div>
            <div className='post-input'>
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

                <button onClick={() => setShowAddRoom(!showAddRoom)}>Lägg till rum</button>
            </div>

            <button onClick={() => addPost(connection, user, post, roomId)}>Send</button>
        </div>
    )
}

export default AddPost