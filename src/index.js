import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

let state = {
  usersItem: [
    { id: 'sasha', name: 'Sasha' },
    { id: 'andrey', name: 'Andrey' },
    { id: 'leha', name: 'Leha' },
    { id: 'alex', name: 'Alex' },
    { id: 'misha', name: 'Misha' },
  ],
  messageItem: [
    { id: 1, message: 'Hi, my name is Alex' },
    { id: 1, message: 'I learn React.' },
    { id: 1, message: 'And this cool' },
  ]
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  </BrowserRouter>
);
