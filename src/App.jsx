import { useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import {get_one_todo, get_all_todos} from "./redux/actions/todo"

const App = () => {

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todo.todo)
  const [todoId, setTodoId] = useState(null)

  const getTodo = () => {
    if (todoId === null) {
      dispatch(get_all_todos())
    }
    else {
      dispatch(get_one_todo(todoId))
      setTodoId(null)
    }
  }

  console.log("todo", todos);

  return (
    <div className="container">
      <div className="row">
        <div class="input-group mb-3">
          <input onChange={(e) => setTodoId(e.target.value)} type="text"  placeholder="enter todo number"/>
          <button onClick={getTodo} class="btn btn-outline-secondary" type="button" id="button-addon2">Get</button>
        </div>

        <div className="col-2">
          <button onClick={getTodo} type="button" class="btn btn-primary">Get all TODOS</button>
        </div>
      </div>
      <div className="row">
        {
          typeof todos === "string" ?
          todos
          :
          todos.map((item, id) => {
            return (
              <div key={id}>
                {item.id}
                {": "}
                {" "}
                {item.title}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;