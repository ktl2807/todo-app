import React from 'react';
import { Container } from 'semantic-ui-react';
import TodoListPage from './pages/Todo-list-pages';
import TodoFormPage from './pages/Todo-form-pages';
import Jokes from './components/Jokes';


const App =() => {
  return (
    <Container>
      <Container >{<TodoFormPage/>}</Container>
      <Container path='/'> {<TodoListPage />}</Container>
      <Container>{< Jokes />}</Container>
      
    </Container>
    
  );
}

export default App;
