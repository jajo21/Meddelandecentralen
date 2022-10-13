import React from 'react'
import ReactDOM from "react-dom/client";

import Chat from './components/Chat';

function App() {
    return (
        <>
            <div>App</div>
            <Chat />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);