import React from 'react'
import { deleteComment } from '../services/comment';

function DeleteComment({ connection, commentId }) {
    return (
        <button onClick={() => deleteComment(connection, commentId)}>Ta bort kommentar</button>
    )
}

export default DeleteComment;