import { createContext, useState, useEffect, useContext } from 'react'
import { startConnection } from '../services/connection';
import UserContext from './UserContext';
import { getRooms } from '../services/api/rooms';
import { getPosts } from '../services/api/posts';
import { getComments } from '../services/api/comments';

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
        const fetchData = async () => {
            const [rooms, roomError] = await getRooms();
            if (roomError) console.log(roomError);
            setRooms(rooms);
            const [posts, postError] = await getPosts();
            if (postError) console.log(postError);
            posts.reverse();
            setPosts(posts);
            const [comments, commentsError] = await getComments();
            if (commentsError) console.log(commentsError);
            setComments(comments);
        }
        fetchData();
    }, [])

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

        return () => stopConnection();

    }, [connection])


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