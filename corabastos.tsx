import React from 'react';
import CorabastosPage from './components/CorabastosPage';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <CorabastosPage />
  </React.StrictMode>
);
