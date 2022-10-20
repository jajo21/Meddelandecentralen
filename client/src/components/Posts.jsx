import React, { useContext } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import Comments from './Comments'
import DeletePost from './DeletePost'

import { getRoomName } from '../services/room'

import './css/posts.css';

function Posts() {
    const { user, connection, posts, comments, rooms } = useContext(ConnectionContext);

    return (
        <div className='posts'>
            {posts.length > 0 ? posts.map((post) => {
                const date = new Date(post.date)
                return (
                    <div className='post' key={post.id}>
                        <div className='post-room'>
                            <p>{getRoomName(rooms, post.roomId)}</p>
                        </div>
                        <div className='post-info'>
                            <div className='circle'>
                                <span className='profile-picture'>Picture</span>
                            </div>
                            <p className='post-user'>{post.user}</p>
                            <p className='post-date'>{date.toLocaleDateString("sv-SV", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
                            <p className='post-delete'>{user === post.user && <DeletePost connection={connection} postId={post.id} comments={comments} />}</p>
                        </div>
                        <p className='post-message'>{post.message}</p>
                        <Comments
                            postId={post.id}
                        />
                    </div>
                )
            }) :
                <div> Här var det tomt, lägg till nya inlägg </div>
            }
        </div>
    )
}

export default Posts