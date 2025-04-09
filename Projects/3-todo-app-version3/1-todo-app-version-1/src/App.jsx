import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import "./App.css";
import ToDoItems from "./components/ToDoItems";
function App() {
  const todoItems=[{
    name:"Buy Milk",
    DueDate:'4/10/2023'
  },
  {
    name:'Go To Gym',
    DueDate:'4/102023'
  },
  {
    name:'Like this video',
    DueDate:'4/10/2023'
  }
]
  return (
    <div>
      <center className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
       <ToDoItems todoItems={todoItems}></ToDoItems>
     
      </center>
    </div>
  )
}

export default App
