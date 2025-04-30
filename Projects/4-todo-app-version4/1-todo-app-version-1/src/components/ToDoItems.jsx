import ToDoItem from "./ToDoItem"
const ToDoItems=({todoItems , onDeleteClick})=>{
     return(
        <div>
             <div className="item-container">
                {todoItems.map((item)=>(
                <ToDoItem 
                key ={item.name}
                toDoName={item.name} ToDoDate={item.DueDate} onDeleteClick={onDeleteClick} ></ToDoItem>
                ))}
      </div>
        </div>
     )
}
export default ToDoItems