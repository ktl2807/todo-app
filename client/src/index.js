import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'fomantic-ui-css/semantic.min.css';
import { TodoContextProvider } from './context/Todo-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoContextProvider>
      <App />
  </TodoContextProvider>
);


