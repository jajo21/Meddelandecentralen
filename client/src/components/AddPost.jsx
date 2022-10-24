import React, { useEffect, useContext } from 'react'
import { addPost } from '../services/api/signalr/post';
import ConnectionContext from '../contexts/ConnectionContext';

import './css/addpost.css';

function AddPost({ post, roomId, setPost, setRoomId, setShowAddRoom, setShowAddPost }) {
    const { user, connection, rooms } = useContext(ConnectionContext);

    //Elementet select i return får värdet 0 om denna useeffect inte finns
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
                        placeholder='Välj ett rum och skriv ett inlägg'
                        type="text"
                        value={post}
                        onChange={e => setPost(e.target.value)}
                    />
                </div>
            </div>

            <button className='add-post-button' onClick={() => {
                addPost(connection, user, post, roomId);
                setShowAddPost(prevState => !prevState);
                setShowAddRoom(prevState => {
                    if (prevState) return !prevState
                })
                setPost('');
            }
            }>Skicka</button>
        </div>
    )
}

export default AddPost