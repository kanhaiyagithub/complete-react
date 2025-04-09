import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import ToDoItem from "./components/ToDoItem"
import TodoItem2 from "./components/ToDoItem2"
import "./App.css";
function App() {
  return (
    <div>
      <center className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <div className="item-container">
      <ToDoItem></ToDoItem>
      <TodoItem2></TodoItem2>
      </div>
     
      </center>
    </div>
  )
}

export default App
