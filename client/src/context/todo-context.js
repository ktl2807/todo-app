import React, {useReducer, createContext}from 'react';

export const TodoContext = createContext();

// initial state
const initialState = {
    todos:[],
    todo: {},
    message: {},
};


const reducer = (state, action)=> {
    
    switch (action.type) {
      case 'FETCH_TODOS': {
        return {
            ...state,
            todos: action.payload,
        }
      };
      case 'FLASH_MESSAGE':{
        return {
            ...state,
            message: action.payload,
        }
      };
      case 'CREATE_TODO': {
        return {
            ...state,
            todos:[...state.todos, action.payload],
        }
      }
      case 'UPDATE_TODO': {
        const todo = action.payload;
        return {
          ...state,
          todos: state.todos.map(item =>
            item._id === state.todos._id ? todo:item,
          )
        }
      }
      case 'DELETE_TODO': {
        const {_id} = action.payload;
        return {
          ...state,
          todos: state.todos.filter(item=>item._id!==_id)
        }
      }
      default:
        throw new Error();
    }
    
  }
  export const TodoContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { children } = props;
  
    return (
      <TodoContext.Provider value={[state, dispatch]}>
        {children}
      </TodoContext.Provider>
    );
  };  