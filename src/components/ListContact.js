import { deleteContact } from "./service"

const List = ({persons, setPersons}) => {
  const deletePerson = (id) => {
    const findedPerson = persons.find(person => person.id === id)
    const personName = findedPerson.name
    const personId = findedPerson.id
    if (window.confirm(`DELETE ${personName}`)){
      deleteContact(personId)
      .catch(error =>{
        alert(`${personName} says you  can't delete his contact `)
        setPersons(persons.filter(n => n.id === id))
      } )
      console.log(`${personName} is deleted`);
    }
      setPersons(persons.filter(person => person.id !== personId))
    }
    return(
    <div>
    <h2>Numbers</h2> 
      { persons.map( person => 
      <ul key={person.id}
          className={'ss'}>
      <li > Name: {person.name} </li> <li> {person.number}</li> 
       <a href="{person.email}">{person.email}</a>
      <button onClick={() => deletePerson(person.id)}>delete</button>
      </ul>
       )}
      </div>
    )
}
export default List