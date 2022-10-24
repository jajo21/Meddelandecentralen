import React, { useContext, useState } from 'react'
import { ConnectionProvider } from './contexts/ConnectionContext';

import Chat from './components/Chat';
import UserContext from './contexts/UserContext';
import Login from './components/Login';
import Navbar from './components/Navbar';

import './app.css';

function App() {
    const { hasUser } = useContext(UserContext);
    const [showAddPost, setShowAddPost] = useState(false);
    const [showAddFilter, setShowAddFilter] = useState(false);
    return (
        <>
            {hasUser ?
                <>
                    <Navbar
                        setShowAddPost={setShowAddPost}
                        setShowAddFilter={setShowAddFilter}
                    />

                    <ConnectionProvider>
                        <Chat
                            showAddPost={showAddPost}
                            showAddFilter={showAddFilter}
                            setShowAddPost={setShowAddPost}
                            setShowAddFilter={setShowAddFilter}
                        />
                    </ConnectionProvider>
                </>
                :
                <Login />}
        </>
    )
}

export default App