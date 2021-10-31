import { useState } from "react";
const App = () => {

  const [todos, setTodos] = useState([])
  const [todoId, setTodoId] = useState(null)
  


  const getTodo = () => {
    if (todoId === null) {
      fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => response.json())
      .then(json => setTodos(json))
    }
    else {
      fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(response => response.json())
      .then(json => setTodos([json]))
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
          todos &&
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