import {
    GET_ONE_TODO_SUCCESS,
    GET_ONE_TODO_FAIL,
    GET_ALL_TODOS_SUCCESS,
    GET_ALL_TODOS_FAIL
  } from "../types"
  
  const initialState = {
    todo: "no todos",
    error: ""
  }
  
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ONE_TODO_SUCCESS:
        return {
          ...state,
          todo: [action.payload]
        }
      case GET_ALL_TODOS_SUCCESS:
        return {
          ...state,
          todo: action.payload
        }
      case GET_ONE_TODO_FAIL:
        return {
          todo: "no todos",
          error: action.payload
        }
      case GET_ALL_TODOS_FAIL:
        return {
          todo: "no todos",
          error: action.payload
        }
       default:
           return state
    }
  }
  
  export default todosReducer;