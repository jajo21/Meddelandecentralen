import React, { useContext, useState } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import { deletePost } from '../services/post'
import Comments from './Comments'

function Posts() {
    const { connection, posts } = useContext(ConnectionContext);
    return (
        <div className='posts'>
            {posts.length > 0 && posts.map((post) => {
                const date = new Date(post.date)
                return (
                    <div className='post' key={post.id}>
                        <hr />
                        <div>
                            <p>Bild |
                                | {post.user} |
                                | {date.toLocaleDateString("sv-SV", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })} |
                                | <button onClick={() => deletePost(connection, post.id)}>Ta bort inlägg</button>
                            </p>
                        </div>
                        <p>{post.message}</p>
                        <Comments
                            postId={post.id}
                        />
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Posts