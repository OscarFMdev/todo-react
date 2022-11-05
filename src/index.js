import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TodoContainer from './functions/components/TodoContainer';
import './styles.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <TodoContainer />
  </StrictMode>,

);
