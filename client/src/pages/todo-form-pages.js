import React, { useContext, useEffect } from "react";
import TodoForm from "../components/todo-form";
import axios from "axios";
import { TodoContext } from "../context/todo-context";
import { flashErrorMessage } from "../components/flash-message";
import { useParams } from "react-router-dom";


const TodoFormPage = ( {} ) => {
  const [state, dispatch] = useContext(TodoContext);
  const { _id } = useParams(); //get URL id

  useEffect(()=>{
    if (_id) {
      console.log(_id)
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3030/todoapp/${_id}`,
          );
          dispatch({
            type: 'FETCH_TODO',
            payload: response.data,
          });
          
        } catch (error) {
          flashErrorMessage(dispatch, error);
        }
      };
      fetchData();
    } 
  }, [dispatch]);
    return (
      <div>
        <TodoForm todo={state.todo}/>
      </div>
    );
  };
  
  export default TodoFormPage;