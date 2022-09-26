import React from 'react';
import { Container } from 'semantic-ui-react';
import TodoListPage from './pages/todo-list-pages';
import TodoFormPage from './pages/todo-form-pages';
import Jokes from './components/joke';

const App =() => {
  return (
    <Container>
      <Container path="/new">{<TodoFormPage/>}</Container>
      <Container path="/"> {<TodoListPage />}</Container>
      <Container>< Jokes /></Container>
      
    </Container>
  );
}

export default App;
