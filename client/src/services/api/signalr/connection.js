import * as signalR from '@microsoft/signalr';
import baseURL from '../baseURL';

export const startConnection = async () => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl(baseURL + "chathub")
        .withAutomaticReconnect([1000, 2000, 5000, 5000, 10000, 10000, 10000, 20000, 30000])
        .configureLogging(signalR.LogLevel.Information)
        .build();

    try {
        await connection.start();
        return [connection, null]
    } catch (error) {
        return [null, error]
    }
}