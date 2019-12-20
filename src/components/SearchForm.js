import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(`props.chars`, props.chars);
  
  useEffect(() => {
    const results = props.chars.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }
 
  return (
    <>
    <form>
      <label htmlFor="name">Search:</label>
      <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange} 
        />
    </form>
    {/* {console.log(`search results`, searchResults)} */}

    {searchResults.map(char =>{
      return (
        <CharacterCard name={char.name} status={char.status} species={char.species}></CharacterCard>
      )
    } )}
    </>
  )
}