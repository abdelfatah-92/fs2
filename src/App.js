import { useState, useEffect } from "react"
import Search from "./Search"
import Form from "./components/Form"
import axios from "axios"


const existPerson = (x,y) => x.find(person => y.toLowerCase() === person.name.toLowerCase())

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState([])
  const [nameSearch, setNameSearch] = useState('')

  const searchName = (event) => {
    event.preventDefault()
    setNameSearch(event.target.value)
    const findName = persons.filter(person => person.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
    setNewSearch(newSearch.concat(findName))
    setNameSearch('')
  }
 
  const addname = (event) => {
    console.log(event);
    event.preventDefault()
     const newobject = {
      name: newName,
      number: newNumber,
      Date: new Date().toISOString(),
      id: persons.length + 1,
     }
  setPersons(existPerson(persons,newName) ?  window.alert(`${newName} is already added to phonebook`).ubDate() : persons.concat(newobject) ) 
  setNewName('')
  setNewNumber('')
  }
  
  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
 
  useEffect(()=>{
    console.log('effect');
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
     console.log(response);
      setPersons(response.data)
    })
 },[])
 console.log('render', persons.length, 'persons')

  return (
    <div >
      <h2>Phonebook</h2>
      <Search nameSearch={nameSearch} searchName={searchName} newSearch={newSearch} />
      <h2>Add a new</h2>
      <Form addname={addname} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <div>
      {persons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
      </div>
    </div>
  )
}

export default App