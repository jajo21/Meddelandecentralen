import { createContext, useState, useEffect, useContext } from 'react'
import { startConnection } from '../services/api/signalr/connection';
import UserContext from './UserContext';
import { getRooms } from '../services/api/http/rooms';
import { getPosts } from '../services/api/http/posts';
import { getComments } from '../services/api/http/comments';

import { toast } from 'react-toastify';

const ConnectionContext = createContext();

export function ConnectionProvider({ children }) {
    const { user } = useContext(UserContext);
    const [connection, setConnection] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [postFilter, setPostFilter] = useState(null);
    const [error, setError] = useState(null);
    const [connectionError, setConnectionError] = useState(null);

    //Hämtar sparad data från servern via fetch
    useEffect(() => {
        const fetchData = async () => {
            const [rooms, roomError] = await getRooms();
            if (roomError) {
                console.log(roomError);
            } else {
                setRooms(rooms);
            }

            const [posts, postError] = await getPosts();
            if (postError) {
                console.log(postError);
            } else {
                posts.reverse();
                setPosts(posts);
            }

            const [comments, commentsError] = await getComments();
            if (commentsError) {
                console.log(commentsError);
            } else {
                setComments(comments);
            }
        }
        fetchData();
    }, [])

    //Skapar en connection mot signalr-hubben
    useEffect(() => {
        if (connection === null) {
            const createHubConnection = async () => {
                const [connection, error] = await startConnection();
                if (error) {
                    setConnectionError(error);
                } else {
                    console.log("Connection Started");
                    setConnection(connection);
                }
            }
            createHubConnection();
        }
    }, [])

    //Skapar connection mellan metoderna i API:t till klienten
    useEffect(() => {
        const connectionOn = () => {
            if (connection) {
                connection.on('ReceivePost', (post) => {
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
                    setRooms(prevState => [...prevState, room])
                });

                connection.on('RecieveError', (error) => {
                    setError(error);
                });

            }
        }
        connectionOn();

        return () => stopConnection();

    }, [connection])

    //Om en error uppstår, visa det på skärmen
    useEffect(() => {
        if (error) {
            toast.error(error);
            setError(null);
        }
    }, [error])

    //Avsluta connection mot signalr
    const stopConnection = () => {
        if (connection !== null) {
            connection.stop().then(() => {
                console.log("Connection closed!");
            });
        }
    };

    return (
        <ConnectionContext.Provider
            value={{
                user,
                connection,
                rooms,
                posts,
                comments,
                postFilter,
                setPostFilter,
                connectionError
            }}>
            {children}
        </ConnectionContext.Provider>
    )
}

export default ConnectionContext;