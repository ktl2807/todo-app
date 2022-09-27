import React, { useContext, useEffect } from "react";
import TodoForm from "../components/todo-form";
import { TodoContext } from "../context/todo-context";



const TodoFormPage = (  ) => {
  const [state, dispatch] = useContext(TodoContext);
  
  
    return (
      <div>
        <TodoForm todo={state.todo}/>
      </div>
    );
  };
  
  export default TodoFormPage;