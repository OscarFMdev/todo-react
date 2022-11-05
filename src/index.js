import { createRoot } from 'react-dom/client';
import TodoContainer from "./classes/components/TodoContainer";
import React from 'react';
import './styles.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
  
);