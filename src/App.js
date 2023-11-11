import './App.css'
import { useState } from 'react'
function App() {
  const [toDos, SetTodos] = useState([])
  const [toDo, SetTodo] = useState('')
  return (
    <div>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br/>
          <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => { SetTodo(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => SetTodos([...toDos, toDo])} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {toDos.map(() => {
            return <div className="todo">
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p>Rect tutorial</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          })
          }
        </div>
      </div>
    </div>
  )
}
export default App;
