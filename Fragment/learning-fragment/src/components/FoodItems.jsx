import Item from "./Item"
import {useState} from "react"
let FoodItems = ({items}) =>{

  let [activeItem,setActiveItem]=useState([]);
  let onBuyButton = (item,event)=>{
let newItems= [...activeItem,item]
setActiveItem(newItems)
  }
return (
    <div>
        <ul className="list-group">
    {items.map((item)=>(
      <Item key={item} 
      fooditem={item}
      bought={activeItem.includes(item)}
      handelBuyButtonClicked={(event)=> {onBuyButton(item,event)}}
        ></Item>
      ))}
</ul>
    </div>
)
}
export default FoodItems