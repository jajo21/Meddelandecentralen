import React, { useState } from 'react';
import { getUser } from '../services/user';

import AddPost from './AddPost';
import AddRoom from './AddRoom';
import Posts from './Posts';
import AddFilter from './AddFilter';

import './css/chat.css';

function Chat({ showAddPost, showAddFilter, setShowAddFilter }) {

    const [post, setPost] = useState('');
    const [roomId, setRoomId] = useState(null);
    const [newRoom, setNewRoom] = useState('');
    const [showAddRoom, setShowAddRoom] = useState(false);

    return (
        <main>
            <div className='chat'>
                <div className='welcome-user'>
                    <div className='circle'>
                        <span className='profile-picture'>Picture</span>
                    </div>
                    <h2 className='welcome'>Välkommen {getUser()}!</h2> {/* State user istället? */}
                </div>

                {showAddPost &&
                    <AddPost
                        post={post}
                        roomId={roomId}
                        setPost={setPost}
                        setRoomId={setRoomId}
                        setShowAddRoom={setShowAddRoom}
                    />
                }
                {showAddRoom &&
                    <AddRoom
                        newRoom={newRoom}
                        setNewRoom={setNewRoom}
                        setShowAddRoom={setShowAddRoom}
                    />
                }

                <AddFilter
                    showAddFilter={showAddFilter}
                    setShowAddFilter={setShowAddFilter}
                />

                <Posts />
            </div>
        </main>
    )
}

export default Chat;