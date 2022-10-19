import React from 'react'
import { deleteComment } from '../services/comment';
import { deletePost } from '../services/post';

function DeletePost({ connection, postId, comments }) {
    return (
        <button onClick={() => {
            deletePost(connection, postId)
            comments.map(comment => {
                if (comment.postId === postId) {
                    deleteComment(connection, comment.id);
                }
            });
        }
        }>Ta bort inlägg</button>
    )
}

export default DeletePost