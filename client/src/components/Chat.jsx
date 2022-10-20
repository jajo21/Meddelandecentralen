import React, { useState } from 'react';
import { getUser } from '../services/user';
import AddPost from './AddPost';
import AddRoom from './AddRoom';
import Posts from './Posts';

import './css/chat.css';

function Chat({ showAddPost }) {

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
                        showAddRoom={showAddRoom}
                        setShowAddRoom={setShowAddRoom}
                    />
                }
                {showAddRoom &&
                    <AddRoom
                        newRoom={newRoom}
                        setNewRoom={setNewRoom}
                        showAddRoom={showAddRoom}
                        setShowAddRoom={setShowAddRoom}
                    />
                }

                <Posts />
            </div>
        </main>
    )
}

export default Chat;