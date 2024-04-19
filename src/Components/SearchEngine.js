
import React, {useState, useEffect} from "react";
import axios from "../axios";
import { json } from "react-router-dom";


const movieAPI = "https://api.themoviedb.org/3/movie/550?api_key=99bc588833b8b6037db6de38b3d64d46"

const SearchEngine = ({fetchUrl}) =>{
    const [input, setInput] = useState("");

    const fetchData = (value) =>{
      
    
    }



  return (
    <form action="/" method="get">
      <input
        type="text"
        placeholder="Search..."
        // value={query}
        // onChange={handleSearch}
        name="s"
      />
      
      </form>
    
  );
    
    
}

export default SearchEngine;