import { App } from './App/App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/search-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
