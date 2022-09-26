import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'fomantic-ui-css/semantic.min.css';
import { TodoContextProvider } from './context/todo-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoContextProvider>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </TodoContextProvider>
);


