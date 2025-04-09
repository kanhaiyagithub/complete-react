import styles from "./FoodInput.module.css";
const FoodInput=({ handelKeyDown })=>{
return (
    <div>
        <input type="text" placeholder="Enter the food item here"
        className={styles.foodInput}
        onKeyDown={handelKeyDown}
        />
    </div>
)
}
export default FoodInput