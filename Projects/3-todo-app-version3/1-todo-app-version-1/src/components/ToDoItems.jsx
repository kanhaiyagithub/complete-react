import ToDoItem from "./ToDoItem"
const ToDoItems=({todoItems})=>{
     return(
        <div>
             <div className="item-container">
                {todoItems.map((item)=>(
                <ToDoItem toDoName={item.name} ToDoDate={item.DueDate} ></ToDoItem>
                ))}
      </div>
        </div>
     )
}
export default ToDoItems