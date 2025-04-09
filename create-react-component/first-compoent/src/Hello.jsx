function Hello(){
    let myName='Kanhaiya' 
    let fullName= () => {
     return 'kanhaiya kumar'
    }
    return(
        <div>
        <h3> hello i am future speaking.i am your master {myName}</h3>
        <h1>hello i am your master {fullName()}</h1>
        </div>
    )
}
export default Hello;