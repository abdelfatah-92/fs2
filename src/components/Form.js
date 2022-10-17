
const Form = ({addname,newName,handleNewName,newNumber,handleNewNumber}) => {
    return(
        <div>
           <form onSubmit={addname}>
        <div>
         <p> name: <input value={newName}
                       onChange={handleNewName}/> </p>
         <p> number: <input value={newNumber}      
                         onChange={handleNewNumber}/> </p>   
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>  
        </div>
    )
}

export default Form