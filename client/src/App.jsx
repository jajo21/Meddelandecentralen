import React, { useContext } from 'react'
import ReactDOM from "react-dom/client";

import Chat from './components/Chat';
import UserContext from './contexts/UserContext';
import Login from './components/Login';

import { UserProvider } from './contexts/UserContext';
import { ConnectionProvider } from './contexts/ConnectionContext';

import './app.css';

function App() {
    const { hasUser } = useContext(UserContext);
    return (
        <main>
            {hasUser ? <Chat /> : <Login />}
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <ConnectionProvider>
            <App />
        </ConnectionProvider>
    </UserProvider>
);