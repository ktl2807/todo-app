import React, { useContext,useState } from "react";
import axios from "axios";
import { TodoContext } from "../context/todo-context";
import { flashErrorMessage } from "./flash-message";


const Todo = ({todo})=>{
    const [state, dispatch]= useContext(TodoContext)
  

    // update todo item
    const updateTodo = async data => {
        try {
          const res = await axios.patch(`http://localhost:3030/todoapp/${todo._id}`,
            data,)
          dispatch({
            type: 'UPDATE_TODO',
            payload:res.data,
          });
      }catch(error){
        flashErrorMessage(dispatch,error)
      }
    };
   
    //delete todo item 
    const deleteTodo = async data =>{
        try{
            const res = await axios.delete(`http://localhost:3030/todoapp/${todo._id}`,
            data,)
            console.log(res)
            dispatch({
                type:'DELETE_TODO',
                payload:res.data,
            })
        }catch(error){
            flashErrorMessage(dispatch,error)
        }
    };
    

    return (
        <React.Fragment key={todo._id}>
            <div className={todo.isCompleted ? "task--completed":"task--notCompleted"}>
                <span className="task--content">{todo.todoText}</span>
                <div className="icons">
                    <span title ="Completed" className="check--task" ><i className="check icon"></i></span>
                    {todo.isCompleted ? '':<span title ="Edit"className="edit--task" ><i className="edit icon" onClick={()=>{updateTodo(todo._id)}} ></i></span>}
                    <span title = "Delte"className="delet--task" onClick={()=>{deleteTodo(todo._id)}}><i className="trash icon" ></i></span>
                </div>
            </div>
        </React.Fragment>
       
       
       
                
                
    )

}

export default Todo;