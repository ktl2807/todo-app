import React, { useContext, useEffect } from "react";
import TodoForm from "../components/Todo-form";
import { TodoContext } from "../context/Todo-context";



const TodoFormPage = (  ) => {
  const [state, dispatch] = useContext(TodoContext);
  
  
    return (
      <div>
        <TodoForm todo={state.todo}/>
      </div>
    );
  };
  
  export default TodoFormPage;