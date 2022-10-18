import React, { useContext, useState } from 'react'

import ConnectionContext from '../contexts/ConnectionContext'
import AddComment from './AddComment'

function Comments({ postId }) {
    const { comments } = useContext(ConnectionContext);
    const [showComments, setShowComments] = useState(false);

    return (
        <>
            <button onClick={() => setShowComments(!showComments)}>Visa kommentarer</button>
            {showComments &&
                <>
                    <div className='comments'>
                        {comments.length > 0 &&
                            comments.map(comment => {
                                if (comment.postId === postId) {
                                    return (
                                        <div className='comment' key={comment.id}>
                                            <p>{comment.user} : {comment.date}</p>
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