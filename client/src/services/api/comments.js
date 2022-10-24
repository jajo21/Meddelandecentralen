export const getComments = async () => {
    const URL = "https://localhost:6001/api/comments";
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