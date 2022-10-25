import * as signalR from '@microsoft/signalr';
import baseURL from '../baseURL';

export const startConnection = async () => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl(baseURL + "chathub")
        .withAutomaticReconnect([1000, 2000, 5000, 5000, 10000, 10000, 10000, 20000, 30000])
        .configureLogging(signalR.LogLevel.Information)
        .build();

    connection.onreconnecting((error) => {
        console.log(error);
    });

    // show that we're reconnected
    connection.onreconnected((error) => {
        console.log("Reconnected")
    });

    try {
        await connection.start();
        return [connection, null]
    } catch (error) {
        return [null, error]
    }
}