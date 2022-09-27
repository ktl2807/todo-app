import React, { useContext, useState } from "react";
import axios from "axios";
import { TodoContext } from "../context/todo-context";
import { flashErrorMessage, FlashMessage } from "./flash-message";
import TextField from '@mui/material/TextField';




const Todo = ({todo})=>{
    const [state, dispatch]= useContext(TodoContext)
    const [updateText, setUpdateText] = useState('')

    // change todo item to edit mode
    const setEditable = async item =>{
        let newItem = {...item, isEdit:!item.isEdit}
        await updateTodo(newItem)
    }

    // get updated task text
    const editTodo = (value)=>{
        setUpdateText(value)
    }
    
    // update task text to orginal todo
    const updateEditedTodo = async item =>{
        
        let updatedTodo = {...item, todoText:updateText, isEdit:false}
        await updateTodo(updatedTodo)
        setUpdateText('')
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

            {/* check task is completed or not*/}
            <div className={todo.isCompleted ? "task--completed":"task--notCompleted"}>
            {/*check task's editModel status */}
                {todo.isEdit ? 
                    <form className="update--task" >
                        <TextField required id="standard-required" label="Required" 
                            defaultValue={todo.todoText} 
                            InputProps={{disableUnderline: false}}
                            sx={{ width:`90%`,input: { color: 'bisque', fontSize:'16px', textAlign:'center'}}} variant="standard" onChange={(event)=>editTodo(event.target.value, todo)} />
                        <button className="btn" onClick={()=>updateEditedTodo(todo)} >update</button></form> :
                        <TextField required id="standard-read-only-input" 
                            defaultValue={todo.todoText} 
                            InputProps={{disableUnderline: true,readOnly: true,}}  
                            sx={{width: `80%`, input: { color: 'bisque', fontSize:'16px', textAlign:'center',cursor:"default" }}} 
                            variant="standard"/>}
                {/*check task's editModel status if true don't show icons */}
                {todo.isEdit ?'': <div className="icons">
                    {/*check task's complete status if completed hide the edit model */}
                    {todo.isCompleted  ? '':<span title="Edit" onClick={()=>setEditable(todo)}><i className="edit icon"></i></span>}
                    <span title ="Completed" className="check--task" onClick={()=>completeTodo(todo)}><i className="check icon"></i></span>
                    <span title = "Delte"className="delet--task" onClick={()=>{deleteTodo(todo._id)}}><i className="trash icon" ></i></span>
                </div>}
                
            </div>
            
        </React.Fragment>
                
    )

}

export default Todo;