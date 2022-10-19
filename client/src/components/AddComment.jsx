import React, { useContext, useState } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import UserContext from '../contexts/UserContext'
import { addComment } from '../services/comment'
import './css/addcomment.css'

function AddComment({ postId }) {
    const { user } = useContext(UserContext);
    const { connection } = useContext(ConnectionContext);
    const [message, setMessage] = useState('');

    return (
        <div className='add-comment'>
            <textarea
                className='add-comment-input'
                placeholder='Skriv en kommentar'
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <div className='add-comment-div'>
                <button className='add-comment-button' onClick={() => addComment(connection, user, message, postId)}>Skicka</button>
            </div>
        </div>
    )
}

export default AddComment