import { createContext, useState, useEffect } from 'react'
import { startConnection } from '../service/connection';

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