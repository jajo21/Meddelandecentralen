import baseURL from "../baseURL";

export const getPosts = async () => {
    const URL = baseURL + "api/posts";
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