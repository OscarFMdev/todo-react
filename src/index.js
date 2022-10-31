import { createRoot } from 'react-dom/client';
import TodoContainer from "./components/TodoContainer"
import React from 'react';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
  
);