import React from 'react'
import { addComment } from '../service/comment'

function AddComment() {
    return (
        <>
            <br />


            <input
                type="text"
                value={''}
                onChange={(e) => console.log("hej")}
            />

            <button onClick={() => addComment(connection, user, message, postId)}>Send</button>
            <br /><br />

        </>
    )
}

export default AddComment