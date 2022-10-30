import { useState, useEffect } from "react"
import {getData} from "./components/service"
import Search from "./components/Search"
import Form from "./components/Form"
import List from "./components/ListContact"

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(()=>{
     getData().then(names => setPersons(names))                
 },[])
 console.log(`there is ${persons.length} contacts`);
  return (
    <div >
      <Search persons={persons} />
      <Form persons={persons} setPersons={setPersons}  />
      <List  persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App

/* note1 delete contact function is on ListContact file
 note2 addname and change functions on Form file
 note3 handdle functions is also on Form file
 note4 search is on search file */