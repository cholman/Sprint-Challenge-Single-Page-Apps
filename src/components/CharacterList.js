import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import {Route, Link} from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then((res) => {
      //console.log(`response`, res.data.results);
      setChars(res.data.results);
      // console.log(`response results`,res.data.results);
    })
    .catch(err => {
      console.log(err.response)
    });
  },[]);
  return  (
    <>
      <SearchForm chars={chars} />
        
    </>)
}

