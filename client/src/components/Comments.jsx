import React, { useContext, useState } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import UserContext from '../contexts/UserContext';
import AddComment from './AddComment'
import DeleteComment from './DeleteComment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from "@fortawesome/free-regular-svg-icons";
import './css/comments.css';

function Comments({ postId }) {
    const { connection, comments } = useContext(ConnectionContext);
    const { user } = useContext(UserContext);
    const [showComments, setShowComments] = useState(false);

    return (
        <>
            <div className='show-comments' onClick={() => setShowComments(!showComments)}>
                <FontAwesomeIcon className='icon-comment' icon={faComment} />
            </div>
            {
                showComments &&
                <>
                    <div className='comments'>
                        <p className='comment-title'>Kommentarer</p>
                        {comments.length > 0 &&
                            comments.map(comment => {
                                const date = new Date(comment.date)
                                if (comment.postId === postId) {
                                    return (
                                        <div className='comment' key={comment.id}>
                                            <div className='comment-info'>
                                                <div className='comment-circle'>
                                                    <span className='comment-profile-picture'>Picture</span>
                                                </div>
                                                <p className='comment-user'>{comment.user}</p>
                                                <p className='comment-date'>{date.toLocaleDateString("sv-SV", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
                                                <p className='comment-delete'>{user === comment.user && <DeleteComment connection={connection} commentId={comment.id} />}</p>
                                            </div>
                                            <p className='comment-message'>{comment.message}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <AddComment
                        postId={postId}
                    />
                </>
            }
        </>
    )
}

export default Comments