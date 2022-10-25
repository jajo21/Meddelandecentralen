import React, { useContext, useState } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import AddComment from './AddComment'
import DeleteComment from './DeleteComment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from "@fortawesome/free-regular-svg-icons";
import './css/comments.css';

function Comments({ postId }) {
    const { user, connection, comments } = useContext(ConnectionContext);
    const [showComments, setShowComments] = useState(false);

    const sortComments = (comments, postId) => {
        if (comments.length === 0) return [];
        if (comments.length > 0 && postId) {
            return comments.filter(comment => comment.postId === postId);
        }
    }

    const sortedComments = sortComments(comments, postId);

    return (
        <>
            <div className='show-comments'>
                <FontAwesomeIcon
                    onClick={() => setShowComments(!showComments)}
                    className='icon-comment'
                    icon={faComment}
                />
                <sup>{sortedComments.length}</sup>
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
                                                <div className='comment-delete'>{user === comment.user && <DeleteComment connection={connection} commentId={comment.id} />}</div>
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
                        user={user}
                        connection={connection}
                    />
                </>
            }
        </>
    )
}

export default Comments