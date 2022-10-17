import React, { useState } from 'react';

import AddPost from './AddPost';
import AddRoom from './AddRoom';
import Posts from './Posts';
import Logout from './Logout';

function Chat() {

    const [post, setPost] = useState('');
    const [roomId, setRoomId] = useState(null);
    const [newRoom, setNewRoom] = useState('');

    return (
        <>
            <Logout />
            <AddPost
                post={post}
                roomId={roomId}
                setPost={setPost}
                setRoomId={setRoomId}
            />
            <AddRoom
                newRoom={newRoom}
                setNewRoom={setNewRoom}
            />

            <Posts />
        </>
    )
}

export default Chat;