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
        console.log("Connection started");

        (async () => {
            if (!connection._connectionStarted) { //guard clause
                console.error('No connection to SignalR');
                return;
            }
            try {
                await connection.send('SendRooms');
                await connection.send('SendPosts');
            }
            catch (err) {
                console.error("Connection established but another error occured: ", err);
            }
        })();

    })


    return connection;
}