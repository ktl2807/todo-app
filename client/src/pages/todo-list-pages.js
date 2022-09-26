import React, {useContext, useEffect} from "react";
import axios from "axios";
import TodoList from "../components/todo-list";
import { TodoContext } from "../context/todo-context";
import { flashErrorMessage } from "../components/flash-message";



const TodoListPage = ()=>{

    const [state, dispatch] = useContext(TodoContext);

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
        
      }, [dispatch]);

    return (
        <div>
            <TodoList todos={state.todos}/>
        </div>
      );
}

export default TodoListPage;