import React, { useContext, useState } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import { deletePost } from '../services/post'
import Comments from './Comments'

function Posts() {
    const { connection, posts } = useContext(ConnectionContext);
    return (
        <div className='posts'>
            {posts.length > 0 && posts.map((post) => {
                return (
                    <div className='post' key={post.id}>
                        <div>"Picture"</div>
                        <button onClick={() => deletePost(connection, post.id)}>Ta bort inlägg</button>
                        <h3>{post.user}</h3>
                        <p>{post.date}</p>
                        <p>{post.message}</p>
                        <Comments
                            postId={post.id}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Posts