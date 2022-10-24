import baseURL from "../baseURL";

export const getRooms = async () => {
    const URL = baseURL + "api/rooms";
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(response.status)
        }
        const rooms = await response.json();
        return [rooms, null];
    } catch (err) {
        const error = { status: err.message, message: 'Något gick fel vid hämtning av rum!' }
        return [null, error];
    }
}