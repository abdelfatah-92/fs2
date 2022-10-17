
const Search = ({nameSearch,searchName,newSearch}) => {
    return(
        <div>
        <form>
        <div> filter shown with: <input value={nameSearch}
                                        onChange={searchName} /></div>                        
       </form>
       <p> u search for: {newSearch.map(person => <li key={person.id}>{person.name} {person.number}</li>)}</p>
       </div>
    )
}

export default Search;