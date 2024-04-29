
import React, {useState, useEffect, Fragment} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "../axios";
import { json } from "react-router-dom";
import NoPage from "../NavbarRoutes/NoPage";

const movieAPI = "https://api.themoviedb.org/3/movie/550?api_key=99bc588833b8b6037db6de38b3d64d46"

const SearchEngine = () =>{
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const handleChange = (event) => {
      setQuery(event.target.value);
    };
    

  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setTimeout(() => {
        window.location.reload();
      }, 50);
      navigate(`/search/${query}`);
   
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=99bc588833b8b6037db6de38b3d64d46&query=${query}`
        );
      
      } catch (error) {
        setError('An error occurred. Please try again later.');
      }
    };
  



  return (
   
    <Fragment>
    <form  onSubmit={handleSubmit}>
        <input 
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Titluri, genuri, persoane"
          className="navbarSearchBar"

        />
        <button className="searchBarButton" type="submit">Search</button>
      </form>
     
    </Fragment>
    
  );
    
    
}

export default SearchEngine;