function ToDoItem({toDoName,ToDoDate}){
return (
    <div>
        <div class="container">
  <div class="row kg-row">
    <div class="col-6">
     {toDoName}
    </div>
    <div class="col-4">{ToDoDate}</div>
    <div class="col-2">
    <button type="button" class="btn btn-danger kg-button">Delete</button>
    </div>
  </div>
</div>
    </div>
)
}
export default ToDoItem