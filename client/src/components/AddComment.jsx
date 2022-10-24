import React, { useState } from 'react'
import { addComment } from '../services/api/signalr/comment';
import './css/addcomment.css'

function AddComment({ postId, user, connection }) {
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
                <button className='add-comment-button' onClick={() => {
                    addComment(connection, user, message, postId);
                    setMessage('');
                }
                }>Skicka</button>
            </div>
        </div>
    )
}

export default AddComment