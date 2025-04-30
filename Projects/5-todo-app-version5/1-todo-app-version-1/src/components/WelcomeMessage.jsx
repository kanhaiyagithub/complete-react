import { useContext } from "react"
import { TodoStoreItems } from "../../store/todo-items-store"

const WelcomeMessage = ()=>{
    const {todoItems}= useContext(TodoStoreItems)
     return (
     todoItems.length === 0 && <p>Enjoy your day</p>
     )
}
export default WelcomeMessage