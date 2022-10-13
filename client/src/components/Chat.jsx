import React, { useEffect, useState } from 'react';
import { startConnection } from '../service/connection';

function Chat() {

    const [connection, setConnection] = useState(null);
    const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]);

    const sendPost = async (user, message) => {
        try {
            await connection.invoke('SendPost', { user, message })
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
                connection.on('ReceivePost', (postInfo) => {
                    console.log("postInfo", postInfo);
                    const postsArray = posts.concat([postInfo]);
                    console.log("postArray", postsArray);
                    setPosts(postsArray);
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

            <button onClick={() => sendPost(user, post)}>Send</button>




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