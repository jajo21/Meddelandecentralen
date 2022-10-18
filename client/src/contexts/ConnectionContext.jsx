import { createContext, useState, useEffect } from 'react'
import { startConnection } from '../services/connection';

const ConnectionContext = createContext();

export function ConnectionProvider({ children }) {
    const [connection, setConnection] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [posts, setPosts] = useState([]);
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

                connection.on('ReceivePosts', (post) => {
                    console.log(post);
                    setPosts(prevState => [...prevState, post]);
                });

                connection.on('RecievePostId', (id) => {
                    setPosts(prevState => {
                        return prevState.filter(post => {
                            return post.id !== id;
                        })
                    });
                });

                connection.on('RecieveComments', comment => {
                    console.log(comment);
                    setComments(prevState => [...prevState, comment]);
                })

                connection.on('RecieveRooms', (room) => {
                    console.log(room);
                    setRooms(prevState => [...prevState, room])
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
        <ConnectionContext.Provider
            value={{
                connection,
                rooms,
                posts,
                comments,
                error,
                setError
            }}>
            {children}
        </ConnectionContext.Provider>
    )
}

export default ConnectionContext;