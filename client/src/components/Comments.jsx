import React, { useContext, useState } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import UserContext from '../contexts/UserContext';
import AddComment from './AddComment'
import DeleteComment from './DeleteComment';

function Comments({ postId }) {
    const { connection, comments } = useContext(ConnectionContext);
    const { user } = useContext(UserContext);
    const [showComments, setShowComments] = useState(false);

    return (
        <>
            <button onClick={() => setShowComments(!showComments)}>Visa kommentarer</button>
            {showComments &&
                <>
                    <div className='comments'>
                        {comments.length > 0 &&
                            comments.map(comment => {
                                const date = new Date(comment.date)
                                if (comment.postId === postId) {
                                    return (
                                        <div className='comment' key={comment.id}>
                                            <p>BILD |
                                                | {comment.user} |
                                                | {date.toLocaleDateString("sv-SV", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })} |
                                                | {user === comment.user && <DeleteComment connection={connection} commentId={comment.id} />}
                                            </p>
                                            <p>{comment.message}</p>
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