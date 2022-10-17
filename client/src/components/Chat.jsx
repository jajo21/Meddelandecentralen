import React, { useEffect, useState, useContext } from 'react';
import { startConnection } from '../service/connection';

import UserContext from '../contexts/UserContext';

import { removeUser } from '../service/user';

import AddPost from './AddPost';
import AddRoom from './AddRoom';
import Posts from './Posts';

function Chat() {
    const { logoutUser } = useContext(UserContext);
    const [connection, setConnection] = useState(null);
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [roomId, setRoomId] = useState(null);
    const [newRoom, setNewRoom] = useState('');
    const [comments, setComments] = useState([]);

    const [error, setError] = useState(null);

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

                connection.on('SendPosts', (posts) => {
                    console.log(posts);
                    setPosts(posts);
                });

                connection.on('SendComments', (comments) => {
                    console.log(comments);
                    setComments(comments);
                });

                connection.on('ReceivePosts', (posts) => {
                    console.log(posts);
                    setPosts(posts);
                    /* setPosts(prevState => [...prevState, post]); // Borde man göra såhär istället? Spara array i klientgränssnittet för att få bättre prestandA?*/
                });
                connection.on('RecieveNewPosts', (posts) => {
                    console.log(posts);
                    setPosts(posts);
                });

                connection.on('RecieveComments', comments => {
                    console.log(comments);
                    setComments(comments);
                })

                connection.on('RecieveRooms', (rooms) => {
                    console.log(rooms);
                    setRooms(rooms)
                });
                connection.on('RecieveError', (error) => {
                    console.log(error);
                    setError(error);
                });
            }
        }
        connectionOn();
    }, [connection])

    return (
        <>
            <button onClick={() => logoutUser()}>Logga ut</button>
            <AddPost
                connection={connection}
                post={post}
                roomId={roomId}
                rooms={rooms}
                setPost={setPost}
                setRoomId={setRoomId}
            />
            <AddRoom
                connection={connection}
                newRoom={newRoom}
                setNewRoom={setNewRoom}
                error={error}
                setError={setError}
            />

            <Posts
                connection={connection}
                posts={posts}
            />
        </>
    )
}

export default Chat;