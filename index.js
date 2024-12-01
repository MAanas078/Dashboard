import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure the ID matches the div in public/index.html
const container = document.getElementById('root');
if (!container) {
    throw new Error('Root container missing in index.html');
}

const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
