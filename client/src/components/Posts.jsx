import React from 'react'

function Posts({ posts }) {
    return (
        <div className='posts'>
            {posts.length > 0 && posts.map((post) => {
                return (
                    <div className='post' key={post.id}>
                        <div>"Picture"</div>
                        <h3>{post.user}</h3>
                        <p>{post.date}</p>
                        <p>{post.message}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts