import React from 'react';
import { Container } from 'semantic-ui-react';
import Todo from './todo';


const TodoList = ({ todos }) => {
  const list = ()=>{
    return todos.map(todo =>{
        return <Todo key={todo._id} todo={todo}/>
    })
  }
  return (
    <Container>
        {list()}
    </Container>
      
    
  );
}

export default TodoList;