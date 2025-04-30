import { useContext } from "react"
import { TodoStoreItems } from "../../store/todo-items-store"
import ToDoItem from "./ToDoItem"
const ToDoItems=()=>{
   //  const contextObj=useContext(TodoStoreItems)
   //  const todoItems= contextObj.todoItems
   //we can destructure the value directly 
   const {todoItems} = useContext(TodoStoreItems)
     return(
        <div>
             <div className="item-container">
                {todoItems.map((item)=>(
                <ToDoItem 
                key ={item.name}
                toDoName={item.name} ToDoDate={item.DueDate} 
               //  onDeleteClick={deleteItem} here i am commenting this because it just pass his data to the ToDoItem so why not implemrnt thsi in ToDoItem only 
                ></ToDoItem>
                ))}
      </div>
        </div>
     )
}
export default ToDoItems