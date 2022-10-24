import baseURL from "../baseURL";

export const getComments = async () => {
    const URL = baseURL + "api/comments";
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(response.status)
        }
        const comments = await response.json();
        return [comments, null];
    } catch (err) {
        const error = { status: err.message, message: 'Något gick fel vid hämtning av kommentarer!' }
        return [null, error];
    }
}