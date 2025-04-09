function Random(){
    let number=Math.random()*100
return(
    <div>
        <h1 style={{'background-color':'#776691'}}>
            random number is {Math.round(number)}
        </h1>
    </div>
)
}
export default Random;