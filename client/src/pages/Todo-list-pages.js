import React, {useContext, useEffect} from "react";
import axios from "axios";
import TodoList from "../components/Todo-list";
import { TodoContext } from "../context/Todo-context";
import { flashErrorMessage } from "../components/Flash-message";



const TodoListPage = ()=>{

    const [state, dispatch] = useContext(TodoContext);
    
    // fetch data
    useEffect(() => {
        const fetchData = async () => {
            try{
            const res = await axios.get('http://localhost:3030/todoapp')
            dispatch({
                type: 'FETCH_TODOS',
                payload: res.data.data || res.data,
            });
        }catch (error){
            flashErrorMessage(dispatch, error);
        }};
        fetchData();
        
      }, [state, dispatch]);


    return (
        <div>
            <TodoList todos={state.todos}/>
        </div>
      );
}

export default TodoListPage;