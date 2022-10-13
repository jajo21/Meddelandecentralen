import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { getMessages, startConnection } from '../service/connection';

function Chat() {

    const [connection, setConnection] = useState(null);
    const [nick, setNick] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async (nick, message) => {
        try {
            await connection.invoke('SendMessage', nick, message)
        } catch (error) {
            console.log(error);
        }
        setMessage('');
    }

    useEffect(() => {
        if (connection === null) {
            const createHubConnection = async () => {
                const connection = await startConnection();
                setConnection(connection);
            }
            createHubConnection();
        }
    }, [])

    useEffect(() => {
        const connectionOn = () => {
            if (connection) {
                connection.on('ReceiveMessage', (nick, receivedMessage) => {
                    const text = `${nick}: ${receivedMessage}`;
                    const msgs = messages.concat([text]);
                    setMessages(msgs);
                });
            }
        }
        connectionOn();
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