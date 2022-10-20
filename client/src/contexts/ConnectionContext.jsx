import { createContext, useState, useEffect, useContext } from 'react'
import { startConnection } from '../services/connection';
import UserContext from './UserContext';

const ConnectionContext = createContext();

export function ConnectionProvider({ children }) {
    const { user } = useContext(UserContext);
    const [connection, setConnection] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [postFilter, setPostFilter] = useState(null);
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
                    posts.reverse();
                    setPosts(posts);
                });

                connection.on('SendComments', (comments) => {
                    console.log(comments);
                    setComments(comments);
                });

                connection.on('ReceivePost', (post) => {
                    console.log(post);
                    setPosts(prevState => [post, ...prevState]);
                });

                connection.on('RecievePostId', response => {
                    setPosts(prevState => {
                        return prevState.filter(post => {
                            return post.id !== response.id;
                        })
                    });
                });

                connection.on('RecieveComment', comment => {
                    console.log(comment);
                    setComments(prevState => [...prevState, comment]);
                })

                connection.on('RecieveCommentId', response => {
                    setComments(prevState => {
                        return prevState.filter(comment => {
                            return comment.id !== response.id;
                        })
                    });
                })

                connection.on('RecieveRoom', (room) => {
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
                user,
                connection,
                rooms,
                posts,
                comments,
                error,
                setError,
                postFilter,
                setPostFilter
            }}>
            {children}
        </ConnectionContext.Provider>
    )
}

export default ConnectionContext;