import React, { useState } from 'react'
import { deleteComment } from '../services/api/signalr/comment';

import './css/deletecomment.css'

function DeleteComment({ connection, commentId }) {
    const [showAccept, setShowAccept] = useState(false);

    return (
        <>
            <button alert='Radera kommentar' className='delete-comment' onClick={() => setShowAccept(true)}>X</button>

            {showAccept &&
                <div className='accept-modal open'>
                    <div className='accept-content'>
                        <p className='accept-info'>Är du säker på att du vill ta bort kommentaren?</p>
                        <div className='accept-buttons'>
                            <button className='accept-button' onClick={() => deleteComment(connection, commentId)}>Ta bort</button>

                            <button className="decline-button" onClick={() => setShowAccept(false)}>Avbryt</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DeleteComment;