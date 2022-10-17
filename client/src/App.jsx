import React, { useContext } from 'react'
import ReactDOM from "react-dom/client";

import Chat from './components/Chat';
import UserContext from './contexts/UserContext';
import Login from './components/Login';

import { UserProvider } from './contexts/UserContext';

function App() {
    const { hasUser } = useContext(UserContext);
    return (
        <>
            {hasUser ? <Chat /> : <Login />}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <App />
    </UserProvider>
);