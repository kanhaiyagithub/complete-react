import {useState,useRef} from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddToDo({onNewItem}){
const [todoName,setTodoName]= useState()
const [dueDate,setDueDate]=useState()
const noOfUpdates=useRef(0);

const handelNameChange=(event)=>{
  setTodoName(event.target.value)
  noOfUpdates.current += 1;
}
const handelDateChange=(event)=>{
  setDueDate(event.target.value)
  console.log(`no of updates are :${noOfUpdates.curen}`);
  
}
const handelAddButtonClicked=()=>{
onNewItem(todoName,dueDate);
setDueDate("")
setTodoName("")
}

 return(
    <div>
        <div className="container text-center">
  <div className="row kg-row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here" value={todoName}  onChange={handelNameChange}/>
    </div>
    <div className="col-4"><input type="date" value={dueDate} onChange={handelDateChange} /></div>
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