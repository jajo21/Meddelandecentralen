import React from 'react'
import { deleteComment } from '../services/api/signalr/comment';

import './css/deletecomment.css'

function DeleteComment({ connection, commentId }) {
    return (
        <button alert='Radera kommentar' className='delete-comment' onClick={() => deleteComment(connection, commentId)}>X</button>
    )
}

export default DeleteComment;