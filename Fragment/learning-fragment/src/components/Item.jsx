import styles from"./Item.module.css"

let Item =({fooditem,handelBuyButtonClicked,bought})=>{
    return(
<li className= {`${styles["kg-item"]} list-group-item ${bought && "active"}`} ><span className={styles["Kg-span"]}>{fooditem}</span>
<button className={`${styles.button} btn btn-info`}
// onClick={()=>console.log(`${fooditem} being bought`)} this is one method and also we can define outside 
// onClick={()=>handelBuyButtonClicked(fooditem)} or we can pass directly refrence of the functions 
onClick={handelBuyButtonClicked}
>Buy</button>
</li>
)
}

export default Item