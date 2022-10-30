import { useState } from "react";
import Notification from "./Notification";
import { postData} from "./service";
import { change } from "./service";

const Form = ({persons, setPersons}) => {
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  
 const handleNewEmail = (event) => {
  setEmail(event.target.value)
 }

  const addname = (event) => {
    console.log(event);                                                             // add contact
        event.preventDefault()
     const newobject = {
        name: newName,
        number: newNumber,
        email: email,
        Date: new Date().toISOString(),
        id: persons.length + 1
      }
    
     const nonExist =() =>{
        setPersons(persons.concat(newobject))                                        // add new contact
        postData(newobject)
        .then(newData => {
          setPersons(persons.concat(newData))
          setNewName('')
          setNewNumber('')
          setEmail('')
          setErrorMessage(`${newobject.name} is added to your phonebook`)
          setTimeout(() => {
            setErrorMessage(null)
          },2000) 
        })
        console.log(`${newobject.name} is added`);
     }

     const existPerson =   persons
      .find(person => newName.toLowerCase() === person.name.toLowerCase())            // scan if there is similer contact

                                                                                      
      const changeNumber = id => {                                                     // changing number and mail
                    const changedNumber = { ...existPerson, number : newobject.number, email : newobject.email } 
                    change(id, changedNumber)
                     .then(returnedData => {                   // bn8yr data fy server
                      setPersons(persons.map(n => n.id !== id ? n : returnedData))
                      setNewName('')
                      setNewNumber('')
                      setEmail('')
                      })
                     .catch(error => {
                      setErrorMessage(`Information of ${existPerson.name} has already been removed from the server`)
                      setTimeout(() => {
                        setErrorMessage(null)
                      },3000)
                      setNewName('')
                      setNewNumber('')
                      setEmail('')
                    })                  
                  }

       const confirmChangeNumber = (id) => { if (window                                 //adding window.confirm to our app
       .confirm(`${newobject.name} this person is already added do you want to chnge his number`)){
        changeNumber(id)
        console.log(`${existPerson.name} number changed to ${newobject.number} email changed to ${newobject.email}`);
       }
      }
     
        existPerson
         ?
        confirmChangeNumber(existPerson.id) 
         :
        nonExist()
     }

    return(
        <div>
           <h2>Add a new</h2>
           <form onSubmit={addname}>
        <div>
         <p> name: <input value={newName}
                          onChange={handleNewName}/> </p>
         <p> number: <input type={"tel"}
                            value={newNumber}      
                            onChange={handleNewNumber}/> </p>  
         <p> email: <input type={"email"}
                           value={email} 
                           onChange={handleNewEmail}/> </p>                 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>  
      <Notification message={errorMessage} />
        </div>
    )
}

export default Form