import React, { useContext, useState } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import UserContext from '../contexts/UserContext'

import { addComment } from '../services/comment'

function AddComment({ postId }) {
    const { user } = useContext(UserContext);
    const { connection } = useContext(ConnectionContext);
    const [message, setMessage] = useState('');

    return (
        <>
            <label>Lägg till kommentar</label>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => addComment(connection, user, message, postId)}>Send</button>
        </>
    )
}

export default AddComment