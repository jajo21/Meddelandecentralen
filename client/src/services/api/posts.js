export const getPosts = async () => {
    const URL = "https://localhost:6001/api/posts";
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(response.status)
        }
        const posts = await response.json();
        return [posts, null];
    } catch (err) {
        const error = { status: err.message, message: 'Något gick fel vid hämtning av inlägg!' }
        return [null, error];
    }
}