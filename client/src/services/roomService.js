export const getRoomName = (rooms, roomId) => {
    if (rooms) {
        const room = rooms.find(room => room.id === roomId);
        return room.name;
    }
}