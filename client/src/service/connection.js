import * as signalR from '@microsoft/signalr';

export const startConnection = async () => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:6001/chathub")
        .withAutomaticReconnect([1000, 2000, 5000, 5000, 10000, 10000, 10000, 20000, 30000])
        .configureLogging(signalR.LogLevel.Information)
        .build();

    connection.onreconnecting((error) => {
        console.log(error);
    });

    // show that we're reconnected
    connection.onreconnected((error) => {

        console.log(error, "reconnected")
    });

    try {
        connection.start().then(() => {
            console.log("Connection started");

            (async () => {
                if (!connection._connectionStarted) { //guard clause
                    console.error('No SignalR Connection');
                    return;
                }
                try {

                    await connection.send('SendRooms');
                }
                catch (err) {
                    console.error("active connection but sending error ", err);
                }
            })();

        })
    } catch (error) {
        console.log("catch", error);
    }

    return connection;
}