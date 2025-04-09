import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"
import {useState} from 'react'

function App() {
 let [foodItems,setFoodItems]=useState([])
 
 const onKeyDown=(event)=>{
  if(event.key === "Enter"){
    let newFoodItem=event.target.value;
    event.target.value="";
    let newItems=[...foodItems,newFoodItem];
    setFoodItems(newItems)
  }
 };
  return (
    <>
   <Container>
    <h1>Healthy Foods</h1>
    {
    /* {foodItems.length === 0?<h3>i am still hungry</h3>:null} this is terniary operator */}
    
    <FoodInput handelKeyDown={onKeyDown}></FoodInput>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
    
    
    
    </Container>
    <Container>
      <p>Above is the list of healthy food and also it is good for health</p>
    </Container>
    </>
  )
}

export default App
