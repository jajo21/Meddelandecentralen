import React, { useEffect, useContext } from 'react'
import { addPost } from '../services/post'
import ConnectionContext from '../contexts/ConnectionContext';

import './css/addpost.css';

function AddPost({ post, roomId, setPost, setRoomId, setShowAddRoom }) {
    const { user, connection, rooms } = useContext(ConnectionContext);

    //Elementet select nere i return får värdet 0 om denna useeffect inte finns
    useEffect(() => {
        if (rooms.length > 0) {
            setRoomId(rooms[0].id)
        }
    }, [rooms]);

    return (
        <div className='add-post'>
            <div className='post-input'>
                <div className='add-room-div'>
                    <select
                        name="room"
                        className='add-post-room'
                        onChange={e => setRoomId(e.target.value)}
                    >
                        {rooms.map(room => {
                            return (
                                <option key={room.id} value={room.id}>{room.name}</option>
                            )
                        })
                        }
                    </select>
                    <div className='add-room-button-div'>
                        <button
                            alert='Lägg till rum'
                            className='add-room-button'
                            onClick={() => setShowAddRoom(prevState => !prevState)}
                        >+
                        </button>
                    </div>
                </div>
                <div>
                    <textarea
                        className='add-post-textarea'
                        placeholder='Skriv ett inlägg'
                        type="text"
                        onChange={e => setPost(e.target.value)}
                    />
                </div>
            </div>

            <button className='add-post-button' onClick={() => addPost(connection, user, post, roomId)}>Skicka</button>
        </div>
    )
}

export default AddPost