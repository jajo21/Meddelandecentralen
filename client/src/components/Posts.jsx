import React, { useContext } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import Comments from './Comments'
import DeletePost from './DeletePost'

import { getRoomName } from '../services/roomService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import './css/posts.css';

function Posts() {
    const { user, connection, posts, comments, rooms, postFilter, connectionError } = useContext(ConnectionContext);

    const sortPosts = (posts, postFilter) => {
        if (posts.length === 0) return [];
        if (posts.length > 0 && !postFilter) {
            return posts;
        } else {
            return posts.filter(post => post.roomId === postFilter);
        }
    }

    const sortedPosts = sortPosts(posts, postFilter);

    return (
        <div className='posts'>
            {sortedPosts.length > 0 && !connectionError &&
                sortedPosts.map(post => {
                    const date = new Date(post.date)
                    const roomName = getRoomName(rooms, post.roomId);
                    return (
                        <div className='post' key={post.id}>
                            <div className='post-room'>
                                <p>{roomName}</p>
                            </div>
                            <div className='post-info'>
                                <div className='circle'>
                                    <span className='profile-picture'>Picture</span>
                                </div>
                                <p className='post-user'>{post.user}</p>
                                <p className='post-date'>{date.toLocaleDateString("sv-SV", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
                                <div className='post-delete'>{user === post.user && <DeletePost connection={connection} postId={post.id} comments={comments} />}</div>
                            </div>
                            <p className='post-message'>{post.message}</p>
                            <Comments
                                postId={post.id}
                            />
                        </div>
                    )
                })
            }

            {sortedPosts.length === 0 && !connectionError &&
                <div className='empty'>
                    Här var det tomt, testa att klicka på <FontAwesomeIcon icon={faMessage} /> i menyn och skapa ett inlägg!
                </div>
            }

            {connectionError &&
                <div className='connection-error'>
                    <h2>Error</h2>
                    <p>Något har gått fel med uppkopplingen till servern.</p>
                    <p><strong>Detaljer:</strong> {connectionError.message}</p>
                </div>
            }
        </div>
    )
}

export default Posts