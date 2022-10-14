import React from 'react'
import { deletePost } from '../service/post'

function Posts({ connection, posts }) {
    return (
        <div className='posts'>
            {posts.length > 0 && posts.map((post) => {
                return (
                    <div className='post' key={post.id}>
                        <div>"Picture"</div>
                        <h3>{post.user}</h3>
                        <p>{post.date}</p>
                        <p>{post.message}</p>
                        <button onClick={() => deletePost(connection, post.id)}>Ta bort inlägg</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts