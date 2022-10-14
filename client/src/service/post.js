export const sendPost = async (connection, user, message, roomId) => {
    try {
        await connection.invoke('SendPost', { user, message, roomId })
    } catch (error) {
        console.log(error);
    }
}