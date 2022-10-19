import React, { useState } from 'react';
import { getUser } from '../services/user';
import AddPost from './AddPost';
import AddRoom from './AddRoom';
import Posts from './Posts';
import Logout from './Logout';

import './css/chat.css';

function Chat() {

    const [post, setPost] = useState('');
    const [roomId, setRoomId] = useState(null);
    const [newRoom, setNewRoom] = useState('');
    const [showAddRoom, setShowAddRoom] = useState(false);
    const [showAddPost, setShowAddPost] = useState(false);

    return (
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
                    showAddRoom={showAddRoom}
                    setShowAddRoom={setShowAddRoom}
                />
            }
            {showAddRoom &&
                <AddRoom
                    newRoom={newRoom}
                    setNewRoom={setNewRoom}
                />
            }

            <Posts />

            <div className='navbar'>
                <Logout />
                <button onClick={() => setShowAddPost(!showAddPost)}>Gör inlägg</button>
            </div>
        </div>
    )
}

export default Chat;