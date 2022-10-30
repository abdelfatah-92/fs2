import { useState } from "react"

const Search = ({persons}) => {
    const [newSearch, setNewSearch] = useState([])
    const [nameSearch, setNameSearch] = useState('')
    const searchName = (event) => {
        event.preventDefault()
        setNameSearch(event.target.value)
        
        const findName = persons
         .filter(person => person.name.toLowerCase()                 //searching for contacts
           .startsWith(nameSearch.toLowerCase()))
            setNewSearch(findName)  
           }
     return(
              <div>
                 <h1>Phonebook</h1>
                  <form>                                            
                     <div> filter shown with: <input value={nameSearch}
                                        onChange={searchName} /></div>                        
                 </form>
                 <p>{newSearch.map(person => <ul key={person.id}> <li>{person.name}</li><li> {person.number}</li><p>{person.email}</p></ul>)}</p>
              </div>
    )
}

export default Search;