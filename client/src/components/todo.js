import React, { useContext,useEffect,useState } from "react";
import axios from "axios";
import { TodoContext } from "../context/todo-context";
import { flashErrorMessage } from "./flash-message";
import TextField from '@mui/material/TextField';
import TodoForm from "./todo-form";



const Todo = ({todo})=>{
    const [state, dispatch]= useContext(TodoContext)
    
    //onChange={(event)=>editTodo(event.target.value, todo) 

    // edit todo item context
    const setEditable = async item =>{
        let newItem = {...item, isEdit:!item.isEdit}
        console.log(newItem)
        
        await updateTodo(newItem)
    }
    
   
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

    // mark todo item completed and updata it
    
    const completeTodo =async item=>{
        let newTodoData = {...item, isCompleted:!item.isCompleted}
        console.log(newTodoData)
        
        await updateTodo(newTodoData)
    }
    //update todo data
    
    const updateTodo = async data =>{
        console.log(data._id, data.todoText)   
        try{
            const res = await axios.patch(`http://localhost:3030/todoapp/${data._id}`, data)
            dispatch({
                type:'UPDATE_TODO',
                payload: res.data,
            })
        }catch(error){
            flashErrorMessage(dispatch,error)
        }
        
    }
   
    

    return (
        <React.Fragment key={todo._id}>
            
            <div className={todo.isCompleted ? "task--completed":"task--notCompleted"}>
            {todo.isEdit ? 
            <>
            <TextField required id="standard-required" label="Required" 
                defaultValue={todo.todoText} 
                InputProps={{disableUnderline: false}}
                sx={{ width:`80%`,input: { color: 'bisque', fontSize:'16px', textAlign:'center'}}} variant="standard" onChange={()=>{}} /><button className="btn">update</button></> :
            <TextField required id="standard-read-only-input" 
                defaultValue={todo.todoText} 
                InputProps={{disableUnderline: true,readOnly: true,}}  
                sx={{width: `80%`, input: { color: 'bisque', fontSize:'16px', textAlign:'center',cursor:"default" }}} 
                variant="standard"/>}
                {todo.isEdit ?'': <div className="icons">
                    {todo.isCompleted  ? '':<span title="Edit" onClick={()=>setEditable(todo)}><i className="edit icon"></i></span>}
                    <span title ="Completed" className="check--task" onClick={()=>completeTodo(todo)}><i className="check icon"></i></span>
                    <span title = "Delte"className="delet--task" onClick={()=>{deleteTodo(todo._id)}}><i className="trash icon" ></i></span>
                </div>}
                
            </div>
            
        </React.Fragment>
       
       
       
                
                
    )

}

export default Todo;