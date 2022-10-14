import React, { useEffect, useState } from 'react';
import { startConnection } from '../service/connection';

import AddPost from './AddPost';
import AddRoom from './AddRoom';
import Posts from './Posts';

function Chat() {

    const [connection, setConnection] = useState(null);
    const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [roomId, setRoomId] = useState(null);
    const [newRoom, setNewRoom] = useState('');

    useEffect(() => {
        if (connection === null) {
            const createHubConnection = async () => {
                const connection = await startConnection();
                setConnection(connection);
            }
            createHubConnection();
        }
    }, [])

    useEffect(() => {
        const connectionOn = () => {
            if (connection) {
                connection.on('SendRooms', (rooms) => {
                    console.log(rooms);
                    setRooms(rooms);
                });

                connection.on('ReceivePost', (postInfo) => {
                    console.log("postInfo", postInfo);
                    const postsArray = posts.concat([postInfo]);
                    console.log("postArray", postsArray);
                    setPosts(postsArray);
                });

                connection.on('RecieveRooms', (rooms) => {
                    console.log(rooms);
                    setRooms(rooms)
                });
            }
        }
        connectionOn();
    }, [connection, posts])

    return (
        <>
            <AddPost
                connection={connection}
                user={user}
                post={post}
                roomId={roomId}
                rooms={rooms}
                setUser={setUser}
                setPost={setPost}
                setRoomId={setRoomId}
            />
            <AddRoom
                connection={connection}
                newRoom={newRoom}
                setNewRoom={setNewRoom}
            />

            <Posts
                posts={posts}
            />
        </>
    )
}

export default Chat;