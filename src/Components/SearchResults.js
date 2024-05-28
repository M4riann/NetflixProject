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
import Footer from './Footer';
const base_url = "https://image.tmdb.org/t/p/original";
function SearchResults({isBigRow}) {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [openModal, isOpelModal] = useState(false)
  const [trailerURL, setIsTrailerURL] = useState("");
  const [showTitle, setTitle] = useState(false)

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
      .catch((error)=>{
        isOpelModal(false);
        window.alert("Nu s-a putut gasi trailer pentru acest film, incercati altul")
      })

    }
    
    
     isOpelModal(true);
  }
  useEffect(()=>{
    const fetchData = async () => {
        
        navigate(`/search/${query}`);
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`
          );
          setMovies(response.data.results);
          console.log(movies)
        } catch (error) {
          setError('An error occurred. Please try again later.');
        }
      };
      fetchData()
  },[])
  const ShowTitle = (movie) =>{
    setTitle(movie)

  }
const HideTitle = () =>{
  setTitle(false)
}
  return (
    <Fragment>
     
    <Navbar position='static' isSearchBarNavbar={false} />
   
    {movies.length > 0? 
    <Fragment>
     <p style={{fontSize:"24px", position:"relative", left:"1.2%", color:'white', fontFamily:"sans-serif"}}>Rezultate pentru: "{`${query}`}"</p>
  
     
      <div       style={{display:"flex",
      flexWrap: "wrap",
      justifyContent:"flex-start",
      height:"100%",
      alignContent: "flex-start"
    }}
                 
                 >
  
   
      {movies.map((movie, index) => (
                

                
                 movie.backdrop_path? (
               <div    onMouseEnter={()=>ShowTitle(movie)}
               onMouseLeave={HideTitle}
               key={index} 
              style={{position:"relative"}}
               >
 
                    <img style={{marginLeft:"20px", marginBottom:"10px"}} className={`row_posters_images ${isBigRow && "row_posters_big"}`}
                    src={`${base_url}${movie.backdrop_path}`}
                    key={index}
                 
                 />
                       
                       {showTitle === movie && 
                       ( <div id="titleContainer" style={{position:"absolute", top:"100px"}}>
                        <p id="titleOnHover"  style={{color:"white", position:"relative", bottom:"90px", left:"25px", width:"320px"}}>{movie?.title || movie?.original_name || movie?.name}</p>
                        <button onClick={()=>TrailerPlayHandler(movie)} id="trailerPlay" className={`${isBigRow && "buttonOnHoverBigRow"} `}  style={{borderRadius:"5%",color:"white", position:"relative", bottom:"90px", left:"25px"}}>Play Trailer</button>
                        </div>)}
                      </div>
                      
                 ):null
                  
              
          ))}
                    </div>
                    </Fragment>

          : 
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

    <Footer height='15%'/>
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