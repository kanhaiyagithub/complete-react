import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import {useState} from "react"
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const initialtodoItems=[
    {
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
const [todoItems,setTodoItems]=useState(initialtodoItems)
const handelNewItem=(itemName,itemDueDate)=>{
  console.log(`New Items Added ${itemName} Date ${itemDueDate}`);
  const newTodoItems=[
    ...todoItems,
    {name:itemName,DueDate:itemDueDate},
  ]
  setTodoItems(newTodoItems);
}
const handelDeleteItem = (todoItemName) =>{
  const newTodoItems = todoItems.filter((item) => item.name !== todoItemName)
  setTodoItems(newTodoItems)
console.log(`item deleted ${todoItemName}`);

}
  return (
    <div>
      <center className="todo-container">
      <AppName></AppName>
      <AddToDo onNewItem={handelNewItem}></AddToDo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
       <ToDoItems todoItems={todoItems} onDeleteClick={handelDeleteItem}></ToDoItems>
     
      </center>
    </div>
  )
}

export default App
