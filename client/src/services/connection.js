import * as signalR from '@microsoft/signalr';

export const startConnection = async () => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:6001/chathub")
        .withAutomaticReconnect([1000, 2000, 5000, 5000, 10000, 10000, 10000, 20000, 30000])
        .configureLogging(signalR.LogLevel.Information)
        .build();

    connection.onreconnecting((error) => {
        console.log("onreconnecting", error);
    });

    // show that we're reconnected
    connection.onreconnected((error) => {
        console.log("Reconnected")
    });

    connection.start().then(() => {
        console.log("Connection Started");
        if (!connection._connectionStarted) {
            console.error('No connection to SignalR');
            return;
        }
    });

    return connection;
}