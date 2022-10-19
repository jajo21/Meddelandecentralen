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
        <>
            <div className='welcome-user'>
                <div className='profile-picture'>Profile picture</div>
                <h2>Välkommen {getUser()}!</h2> {/* State user istället? */}
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

            <div>
                <Logout />
                <button onClick={() => setShowAddPost(!showAddPost)}>Gör inlägg</button>
            </div>
        </>
    )
}

export default Chat;