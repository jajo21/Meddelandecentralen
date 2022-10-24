import React from 'react'
import { deleteComment } from '../services/api/signalr/comment';
import { deletePost } from '../services/api/signalr/post';
import './css/deletepost.css';

function DeletePost({ connection, postId, comments }) {
    return (
        <button alert='Radera inlägg' className='delete-button' onClick={() => {
            deletePost(connection, postId)
            comments.map(comment => {
                if (comment.postId === postId) {
                    deleteComment(connection, comment.id);
                }
            });
        }
        }>X</button>
    )
}

export default DeletePost