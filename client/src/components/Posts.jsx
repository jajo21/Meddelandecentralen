import React, { useContext, useState } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import UserContext from '../contexts/UserContext'
import { deletePost } from '../services/post'
import { deleteComment } from '../services/comment'
import Comments from './Comments'
import DeletePost from './DeletePost'

function Posts() {
    const { connection, posts, comments } = useContext(ConnectionContext);
    const { user } = useContext(UserContext);
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
                                | {user === post.user && <DeletePost connection={connection} postId={post.id} comments={comments} />}
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