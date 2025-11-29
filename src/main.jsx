
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { Router, BrowserRouter } from 'react-router-dom';

const root = document.querySelector('#root');

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </StrictMode>
);
