export const getPostUser = (posts, postId) => {
    if (posts) {
        const post = posts.find(post => post.id === postId);
        return post.user;
    }
}