export const addRoom = async (connection, name, rooms) => {
    try {
        const isTaken = rooms.find(room => room.name == name);
        if (isTaken) throw Error("Namnet är upptaget")
        await connection.invoke('AddRoom', { name })
    } catch (error) {
        console.log(error);
    }
}