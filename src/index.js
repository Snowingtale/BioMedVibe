import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing CSS
import App from './App'; // Main App component

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render only the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
