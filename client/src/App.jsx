import React, { useContext, useState } from 'react'
import { ConnectionProvider } from './contexts/ConnectionContext';

import Chat from './components/Chat';
import UserContext from './contexts/UserContext';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';

import './app.css';

function App() {
    const { user, hasUser } = useContext(UserContext);
    const [showAddPost, setShowAddPost] = useState(false);
    const [showAddFilter, setShowAddFilter] = useState(false);
    return (
        <ErrorBoundary>
            {hasUser ?
                <>
                    <Navbar
                        setShowAddPost={setShowAddPost}
                        setShowAddFilter={setShowAddFilter}
                    />

                    <ConnectionProvider>
                        <Chat
                            user={user}
                            showAddPost={showAddPost}
                            showAddFilter={showAddFilter}
                            setShowAddPost={setShowAddPost}
                            setShowAddFilter={setShowAddFilter}
                        />
                    </ConnectionProvider>
                </>
                :
                <Login />}
        </ErrorBoundary>
    )
}

export default App