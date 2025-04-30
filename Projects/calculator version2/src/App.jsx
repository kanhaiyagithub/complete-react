import styles from'./App.module.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'
import {useState} from "react"
function App() {
  let [calVal,setCalVal]=useState("")
  //const onButtonClick=(event)=> console.log(event)//this is one way to do the things but we can also pass the innertext so that it can find the button clicked by own 
  const onButtonClick=(buttonText)=> {
    if(buttonText === "c"){
      setCalVal("")
    }
    else if(buttonText === "="){
      const result=eval(calVal)
      setCalVal(result)
    }
    else{
      const newDisplayValue=calVal+buttonText
      setCalVal(newDisplayValue)
    }
  }
  return (
   <>
<div className={styles.calculator}>
  <Display displayValue={calVal}></Display>
  <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
</div>
</>
  )
}

export default App
