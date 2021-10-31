import {
  GET_ONE_TODO_SUCCESS,
  GET_ONE_TODO_FAIL,
  GET_ALL_TODOS_SUCCESS,
  GET_ALL_TODOS_FAIL
} from "../types"
import axios from "axios"

export const get_one_todo = id => dispatch => {
  const requestUrl = `https://jsonplaceholder.typicode.com/todos/${id}`
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get(requestUrl, config)
    .then((response) => {
      dispatch({type: GET_ONE_TODO_SUCCESS, payload: response.data})
    }
    )
    .catch((error) => {
      dispatch({type: GET_ONE_TODO_FAIL, payload: error})
    })
}

export const get_all_todos = () => dispatch => {
  const requestUrl = `https://jsonplaceholder.typicode.com/todos`
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get(requestUrl, config)
    .then((response) => {
      dispatch({type: GET_ALL_TODOS_SUCCESS, payload: response.data})
    }
    )
    .catch((error) => {
      dispatch({type: GET_ALL_TODOS_FAIL, payload: error})
    })
}