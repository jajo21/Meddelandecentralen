export const addRoom = async (connection, name, user) => {
    try {
        await connection.invoke('AddRoom', { name, user })
    } catch (error) {
        console.log(error);
    }
}