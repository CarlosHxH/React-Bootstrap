import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



ReactDOM.render(<App />, document.getElementById('root'));

*/
const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
