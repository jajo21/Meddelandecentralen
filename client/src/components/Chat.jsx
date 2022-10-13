import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';

function Chat() {

    const [connection, setConnection] = useState(null);
    const [nick, setNick] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async (nick, message) => {
        if (!connection.state === "Connected") location.reload();
        try {
            await connection.invoke('SendMessage', nick, message)
        } catch (error) {
            console.log(error);
        }
        setMessage('');
    }

    useEffect(() => {
        const createHubConnection = async () => {
            const connect = new signalR.HubConnectionBuilder()
                .withUrl("https://localhost:6001/chathub")
                .withAutomaticReconnect()
                .configureLogging(signalR.LogLevel.Information)
                .build();

            try {
                await connect.start()
                    .then(() => console.log('Connection started!'))
            } catch (err) {
                console.log('Error while establishing connection :(')
            }

            setConnection(connect)
        }
        createHubConnection();
    }, [])

    useEffect(() => {
        const conn = () => {
            if (connection) {
                connection.on('ReceiveMessage', (nick, receivedMessage) => {
                    const text = `${nick}: ${receivedMessage}`;
                    const msgs = messages.concat([text]);
                    setMessages(msgs);
                });
            }
        }
        conn();
    }, [connection, messages])

    return (
        <div>
            <br />
            <input
                type="text"
                value={nick}
                onChange={e => setNick(e.target.value)}
            />

            <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />

            <button onClick={() => sendMessage(nick, message)}>Send</button>

            <div>
                {messages.map((message, index) => (
                    <span style={{ display: 'block' }} key={index}> {message} </span>
                ))}
            </div>
        </div>
    )
}

export default Chat;