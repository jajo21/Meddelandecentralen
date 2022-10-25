export const getRoomName = (rooms, roomId) => {
    if (rooms) {
        const room = rooms.find(room => room.id === roomId);
        return room.name;
    }
}

export const getRoomNameByPostId = (rooms, posts, postId) => {
    if (rooms && posts) {
        const post = posts.find(post => post.id === postId);
        const room = rooms.find(room => room.id === post.roomId);
        return room.name;
    }
}