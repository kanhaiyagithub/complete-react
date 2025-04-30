import {useState,useRef, useContext} from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoStoreItems } from "../../store/todo-items-store";
function AddToDo(){
// const [todoName,setTodoName]= useState()
// const [dueDate,setDueDate]=useState()
const {addNewItem}=useContext(TodoStoreItems)
const todoNameElement=useRef();
const dueDateElement=useRef();
// const handelNameChange=(event)=>{
//   setTodoName(event.target.value)
//   noOfUpdates.current += 1;
// }
// const handelDateChange=(event)=>{
//   setDueDate(event.target.value)
//   console.log(`no of updates are :${noOfUpdates.current}`);
  
// }
const handelAddButtonClicked=()=>{
  const todoName=todoNameElement.current.value;
  const dueDate=dueDateElement.current.value;
  todoNameElement.current.value="";
  dueDateElement.current.value="";
  addNewItem(todoName,dueDate);
// setDueDate("")
// setTodoName("")
}

 return(
    <div>
        <div className="container text-center">
  <div className="row kg-row">
    <div className="col-6">
      <input type="text" ref={todoNameElement} placeholder="Enter Todo Here" />
    </div>
    <div className="col-4"><input type="date" ref={dueDateElement} /></div>
    <div className="col-2">
    <button type="button" className="btn btn-success kg-button" onClick={handelAddButtonClicked}>
      <BiMessageAdd />
      </button>
    </div>
  </div>
</div>
    </div>
 )
}
export default AddToDo