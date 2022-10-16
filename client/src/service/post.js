export const addPost = async (connection, user, message, roomId) => {
    try {
        await connection.invoke('AddPost', { user, message, roomId })
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (connection, postId) => {
    try {
        await connection.invoke('DeletePost', postId)
    } catch (error) {
        console.log(error);
    }
}