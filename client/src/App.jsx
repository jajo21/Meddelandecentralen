import React, { useContext, useState } from 'react'
import ReactDOM from "react-dom/client";

import Chat from './components/Chat';
import UserContext from './contexts/UserContext';
import Login from './components/Login';
import Navbar from './components/Navbar';

import { UserProvider } from './contexts/UserContext';
import { ConnectionProvider } from './contexts/ConnectionContext';

import './app.css';

function App() {
    const { hasUser } = useContext(UserContext);
    const [showAddPost, setShowAddPost] = useState(false);
    return (
        <>
            {hasUser ?
                <>
                    <Navbar setShowAddPost={setShowAddPost} />
                    <ConnectionProvider>
                        <Chat showAddPost={showAddPost} />
                    </ConnectionProvider>
                </>
                :
                <Login />}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <App />
    </UserProvider>
);