export const addRoom = async (connection, name) => {
    try {
        await connection.invoke('AddRoom', { name })
    } catch (error) {
        console.log(error);
    }
}