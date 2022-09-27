import React, { useContext, useEffect } from "react";
import TodoForm from "../components/todo-form";
import axios from "axios";
import { TodoContext } from "../context/todo-context";
import { flashErrorMessage } from "../components/flash-message";
import { useParams } from "react-router-dom";


const TodoFormPage = (  ) => {
  const [state, dispatch] = useContext(TodoContext);
  
  
    return (
      <div>
        <TodoForm todo={state.todo}/>
      </div>
    );
  };
  
  export default TodoFormPage;