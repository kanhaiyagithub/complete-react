import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import {useState} from "react"
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoStoreItems } from "../store/todo-items-store";
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
const addNewItem=(itemName,itemDueDate)=>{
  console.log(`New Items Added ${itemName} Date ${itemDueDate}`);
  // const newTodoItems=[
  //   ...todoItems,
  //   {name:itemName,DueDate:itemDueDate},
  // ]
  // setTodoItems( () => newTodoItems);
  setTodoItems((currValue)=>[
    ...currValue,
    {name:itemName, DueDate:itemDueDate}
  ])
}
const deleteItem = (todoItemName) =>{
  const newTodoItems = todoItems.filter((item) => item.name !== todoItemName)
  setTodoItems(newTodoItems)
console.log(`item deleted ${todoItemName}`);
}
const defaultTodoItems=[{name:"Buy Ghee",DueDate:"Today"}]
// const defaultTodoItems=[]

  return (
    <TodoStoreItems.Provider value={{
      // todoitems:todoItems,
      // addNewItem:addNewItem,
      // deleteItem:deleteItem
      // here all the value are same so we can use it in single line 
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      <center className="todo-container">
      <AppName></AppName>
      <AddToDo ></AddToDo>
      {<WelcomeMessage ></WelcomeMessage>}
       <ToDoItems ></ToDoItems>
     
      </center>
      </TodoStoreItems.Provider>
  )
}

export default App
