import React, { useEffect, useState } from 'react';
import { startConnection } from '../service/connection';

import AddRoom from './AddRoom';

function Chat() {

    const [connection, setConnection] = useState(null);
    const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [roomId, setRoomId] = useState(null);
    const [newRoom, setNewRoom] = useState('');


    const sendPost = async (user, message, roomId) => {
        try {
            await connection.invoke('SendPost', { user, message, roomId })
        } catch (error) {
            console.log(error);
        }
    }

    const addRoom = async (name) => {
        try {
            await connection.invoke('AddRoom', { name })
        } catch (error) {
            console.log(error);
        }
    }

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
            <br />
            <input
                type="text"
                value={user}
                onChange={e => setUser(e.target.value)}
            />

            <input
                type="text"
                value={post}
                onChange={e => setPost(e.target.value)}
            />

            <select
                name="room"
                onChange={e => setRoomId(e.target.value)}
            >
                <option>Inget rum</option>
                {
                    rooms.map(room => {
                        return (
                            <option key={room.id} value={room.id}>{room.name}</option>
                        )
                    })
                }
            </select>


            <button onClick={() => sendPost(user, post, roomId)}>Send</button>
            <br /><br />

            <AddRoom
                addRoom={addRoom}
                newRoom={newRoom}
                setNewRoom={setNewRoom}
            />

            <div className='posts'>
                {posts.length > 0 && posts.map((post, index) => {
                    return (
                        <div className='post' key={index}> {/* Byt till ID när det är fixat */}
                            <div>"Picture"</div>
                            <h3>{post.user}</h3>
                            <p>{post.date}</p>
                            <p>{post.message}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Chat;