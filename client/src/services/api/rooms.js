export const getRooms = async () => {
    const URL = "https://localhost:6001/api/rooms";
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