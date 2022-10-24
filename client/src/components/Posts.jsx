import React, { useContext } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import Comments from './Comments'
import DeletePost from './DeletePost'

import { getRoomName } from '../services/roomService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import './css/posts.css';

function Posts() {
    const { user, connection, posts, comments, rooms, postFilter } = useContext(ConnectionContext);

    const renderPosts = (date, postId, rooms, postRoomId, postUser, postMessage, user) => {
        return (
            <div className='post' key={postId}>
                <div className='post-room'>
                    <p>{getRoomName(rooms, postRoomId)}</p>
                </div>
                <div className='post-info'>
                    <div className='circle'>
                        <span className='profile-picture'>Picture</span>
                    </div>
                    <p className='post-user'>{postUser}</p>
                    <p className='post-date'>{date.toLocaleDateString("sv-SV", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
                    <p className='post-delete'>{user === postUser && <DeletePost connection={connection} postId={postId} comments={comments} />}</p>
                </div>
                <p className='post-message'>{postMessage}</p>
                <Comments
                    postId={postId}
                />
            </div>
        )
    }

    return (
        <div className='posts'>
            {posts.length > 0 && !postFilter
                ? posts.map((post) => {
                    const date = new Date(post.date)
                    return renderPosts(date, post.id, rooms, post.roomId, post.user, post.message, user);

                })
                : posts.map(post => {
                    if (post.roomId === postFilter) {
                        const date = new Date(post.date)
                        return renderPosts(date, post.id, rooms, post.roomId, post.user, post.message, user);
                    }
                })
            }

            {posts.length === 0 &&
                <div className='empty'>
                    Här var det tomt, testa att klicka på <FontAwesomeIcon icon={faMessage} /> i menyn och skapa ett inlägg!
                </div>}
        </div>
    )
}

export default Posts