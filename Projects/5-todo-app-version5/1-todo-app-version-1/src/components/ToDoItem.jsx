import { useContext } from "react";
import { AiFillDelete} from "react-icons/ai";
import { TodoStoreItems } from "../../store/todo-items-store";
function ToDoItem({toDoName,ToDoDate,onDeleteClick}){
const { deleteItem } = useContext(TodoStoreItems)

return (
    <div>
        <div className="container">
  <div className="row kg-row">
    <div className="col-6">
     {toDoName}
    </div>
    <div className="col-4">{ToDoDate}</div>
    <div className="col-2">
    <button type="button" className="btn btn-danger kg-button" onClick= {()=> deleteItem(toDoName)}>
      <AiFillDelete />
      </button>
    </div>
  </div>
</div>
    </div>
)
}
export default ToDoItem