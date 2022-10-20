export const addRoom = async (connection, name) => {
    try {
        await connection.invoke('AddRoom', { name })
    } catch (error) {
        console.log(error);
    }
}

export const getRoomName = (rooms, roomId) => {
    if (rooms) {
        const room = rooms.find(room => room.id === roomId);
        return room.name
    }
}