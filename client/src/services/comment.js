export const addComment = async (connection, user, message, postId) => {
    try {
        await connection.invoke('AddComment', { user, message, postId })
    } catch (error) {
        console.log(error);
    }
}

export const deleteComment = async (connection, id) => {
    try {
        await connection.invoke('DeleteComment', { id })
    } catch (error) {
        console.log(error);
    }
}