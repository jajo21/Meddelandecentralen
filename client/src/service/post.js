export const sendPost = async (connection, user, message, roomId) => {
    try {
        await connection.invoke('SendPost', { user, message, roomId })
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (connection, roomId) => {
    try {
        await connection.invoke('DeletePost', roomId)
    } catch (error) {
        console.log(error);
    }
}