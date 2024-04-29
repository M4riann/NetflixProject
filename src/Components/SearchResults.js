import React, { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import requests from '../requests';
import "../Components/Row.css" 
import Navbar from './Navbar';
import movieTrailer from "movie-trailer";
import ReactModal from "react-modal";
import ReactPlayer from "react-player"
import NoPage from '../NavbarRoutes/NoPage';
import NoResults from './NoResults';
const base_url = "https://image.tmdb.org/t/p/original";
function SearchResults({isBigRow}) {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [openModal, isOpelModal] = useState(false)
  const [trailerURL, setIsTrailerURL] = useState("");
  const navigate = useNavigate();
  const ModalOpenereHandler = () =>{
    
    isOpelModal(false);
   }
   const TrailerPlayHandler = ( movie) =>{
    if(trailerURL){
      setIsTrailerURL("");  
          
    }else{
      movieTrailer(movie?.title || movie?.name || "" )
      .then((url)=>{
        
        const urlParams = new URLSearchParams(new URL(url).search);
        urlParams.get('trailer');
        setIsTrailerURL(url)

      })
     
      .catch((error)=>window.alert("Nu s-a putut gasi trailer pentru acest film, incercati altul"))

    }
    
    
     isOpelModal(true);
  }
  useEffect(()=>{
    const fetchData = async () => {
        
        navigate(`/search/${query}`);
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=99bc588833b8b6037db6de38b3d64d46&query=${query}`
          );
          setMovies(response.data.results);
          console.log(movies)
        } catch (error) {
          setError('An error occurred. Please try again later.');
        }
      };
      fetchData()
  },[])
  
  return (
    <Fragment>
     
    <Navbar position='static' isSearchBarNavbar={false} />
    
    {movies.length > 0? 
    <div>
     
      
      <div style={{display:"flex",
    flexWrap: "wrap",
    justifyContent:"flex-start",
    }}>
        
      {movies.map((movie, index) => (
                

                  
                 movie.backdrop_path? (
                    <img style={{marginLeft:"20px", marginBottom:"10px"}} className={`row_posters_images ${isBigRow && "row_posters_big"}`}
                    src={`${base_url}${movie.backdrop_path}`}
                    key={index}
                    onClick={()=>TrailerPlayHandler(movie)}
                    ></img>
                 ):null
                  
              
                 
          ))}
          </div>
    </div> : 
    <div style={{display:'flex', flexDirection:"column", alignItems:"center", marginTop:"10%"}}>
      <h2 style={{color:"white"}}>Cautarea pentru "{`${query}`}" nu a returnat rezultat</h2>
      <h2 style={{color:"white",fontSize:"20px"}}>Sugestii:</h2>
      <ul style={{color:"white"}}>
        <li>Incearca alte cuvinte-cheie</li>
        <li>Cauti un film sau serial?</li>
        <li>Incearca sa cauti dupa titlul unui film sau al unui serial </li>
      </ul>
    </div>
    }
    <ReactModal
    ariaHideApp={false}
      isOpen={openModal}
      onRequestClose={ModalOpenereHandler}
            style={{overlay:{
          backgroundColor:"",
      },
      content:{
        width:"50%",
        height:"85%",
        margin:"auto",
        padding:"8px",
        border:"none",
        overflow:"hidden",
        backgroundColor: "#141414",
      },
     
    
    }}
    >
        {trailerURL && (
          <div className="react-wrapper">
            <ReactPlayer className="react-player"
            url={trailerURL}
            height="85%"
            width="90%"
            controls={true}
            playing={true}
            
            >
            
            </ReactPlayer>
            

            
          </div>
        )}
    </ReactModal>

   </Fragment>
  );
}

export default SearchResults;