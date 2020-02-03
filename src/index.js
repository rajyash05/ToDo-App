import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import TodoApp from './TodoApp/TodoApp';
import theme from './theme';

ReactDOM.render(
  (
    <ThemeProvider theme={theme}>
      <TodoApp />
    </ThemeProvider>
  ), document.getElementById('root')
);
