import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplates from './components/TodoTemplates';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoInput';
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplates>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplates>
    </>
  );
}

export default App;