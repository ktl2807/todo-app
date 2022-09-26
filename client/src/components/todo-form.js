import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import { TodoContext } from '../context/todo-context';
import axios from 'axios';
import { flashErrorMessage } from './flash-message';

const TodoForm = ({todo}) => {

  const [state, dispatch] = useContext(TodoContext);
  const {register, handleSubmit} = useForm({defaultValues: todo,});
  


  const addTodo = async data =>{
    try {
        const res = await axios.post('http://localhost:3030/todoapp', data);
        dispatch({
            type: 'CREATE_TODO',
            payload: res.data,
        });
    }catch(error){
        flashErrorMessage(dispatch, error);
    }
  };

  
  const onSubmit= async data =>{
    await addTodo(data);
  };


  return (
    < form className="add--task" onSubmit={handleSubmit(onSubmit)} >
        <input type="text" className='task--input' placeholder="ex: Do Homework" 
        {...register('todoText')}  />   
         
        <button className="btn" type='submit' >Add</button>
    </form>
  )
}

export default TodoForm;