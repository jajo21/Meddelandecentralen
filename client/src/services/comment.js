export const addComment = async (connection, user, message, postId) => {
    try {
        await connection.invoke('AddComment', { user, message, postId })
    } catch (error) {
        console.log(error);
    }
}

export const deleteComment = async (connection, commentId) => {
    try {
        await connection.invoke('DeleteComment', commentId)
    } catch (error) {
        console.log(error);
    }
}