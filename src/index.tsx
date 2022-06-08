import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// if npm run white -rm bugs and homepage at bottom package json
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

