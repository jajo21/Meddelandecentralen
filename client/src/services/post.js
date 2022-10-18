export const addPost = async (connection, user, message, roomId) => {
    try {
        await connection.invoke('AddPost', { user, message, roomId })
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (connection, id) => {
    try {
        await connection.invoke('DeletePost', { id })
    } catch (error) {
        console.log(error);
    }
}