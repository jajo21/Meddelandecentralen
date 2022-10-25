import React, { useEffect, useState } from 'react'
import { deleteComment } from '../services/api/signalr/comment';
import { deletePost } from '../services/api/signalr/post';
import './css/deletepost.css';

function DeletePost({ connection, postId, comments }) {
    const [showAccept, setShowAccept] = useState(false);

    return (
        <>
            <button alert='Radera inlägg' className='delete-button' onClick={() => setShowAccept(true)}>X</button>

            {showAccept &&
                <div className='accept-modal open'>
                    <div className='accept-content'>
                        <p className='accept-info'>Är du säker på att du vill ta bort inlägget med alla tillhörande kommentarer?</p>
                        <div className='accept-buttons'>
                            <button className='accept-button' onClick={() => {
                                deletePost(connection, postId)
                                comments.map(comment => {
                                    if (comment.postId === postId) {
                                        deleteComment(connection, comment.id);
                                    }
                                });
                            }
                            }>Ta bort</button>

                            <button className="decline-button" onClick={() => setShowAccept(false)}>Avbryt</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DeletePost
