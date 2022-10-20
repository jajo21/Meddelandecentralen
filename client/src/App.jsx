import React, { useContext, useState } from 'react'

import Chat from './components/Chat';
import UserContext from './contexts/UserContext';
import Login from './components/Login';
import Navbar from './components/Navbar';

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

export default App