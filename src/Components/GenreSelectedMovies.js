import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import movieTrailer from "movie-trailer";
import Carousel from 'react-multi-carousel';
import LeftArrow from "./SliderArrows/LeftArrow";
import LeftArrowBig from "./SliderArrows/leftArrowBig";
import RightArrow from "../Components/SliderArrows/RightArrow"
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import "../Components/GenreSelectedMovies.css"
import GenresButtons from './GenresButtons';
import { useParams } from 'react-router-dom';
import NavbarVideo from './NavbarVideo';
import requests from "../requests";
import axios from 'axios';
import NoImageFound from '../images/NoImageFound';
import RightArrowBig from './SliderArrows/RightArrowBig';
import Row from './Row';
const base_url = "https://image.tmdb.org/t/p/original";

function GenreSelectedMovies({isBigRow=true, isBigArrow=true}) {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [trailerURL, setIsTrailerURL] = useState("");
  const [openModal, isOpelModal] = useState(false)
  const [openGenres, setIsOpenGenres] = useState("genresButtonActive")
  const [movies, setMovies] = useState([]);
  const [moviesPosters, setIsMoviePoster] = useState([]);
  const [loading, setIsLoading] = useState(true)
  const { genreId } = useParams();
  
  const NetflixHorrorTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de groază</h1>
  const NetflixActionMoviesTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de acțiune</h1>
  const NetflixComedyTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de comedie</h1>
  const NetflixRomanceTitle = <h1 className="titleRow" style={{color:"white"}}>Filme romantice</h1>

  const madMaxTitle = <h1 style={{fontFamily:"MadMaxTitle", fontSize:"50px"}}>Mad Max: Fury Road</h1>

  useEffect(() => {
    async function fetchMoviesByGenre() {
      const apiKey = '99bc588833b8b6037db6de38b3d64d46'; 
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;
        const response = await axios.get(url);
        setMovies(response.data.results);
        return response;
    }

    fetchMoviesByGenre();
  }, [genreId]);




  const ModalOpenereHandler = () =>{
    
    isOpelModal(false);
   }

  // const navigate = useNavigate();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    
    },
    
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const TrailerPlayHandler = ( movie) =>{
    if(trailerURL){
      setIsTrailerURL("");  
          
    }else{
      movieTrailer(movie?.title || movie?.name  || "" )
      
      .then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search);
        urlParams.get("v");
        setIsTrailerURL(url)
       
      })
     
      .catch((error)=>window.alert("Nu s-a putut gasi trailer pentru acest film, incercati altul"))
      
    }
    
    
     isOpelModal(true);
  }

  useEffect(()=>{
    async function fetchBanner(){
      const request = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=99bc588833b8b6037db6de38b3d64d46&with_genres=${genreId}`)
      setIsMoviePoster(
        
          request.data.results[
        Math.floor(Math.random() * request.data.results.length-1)

          ],

      );
      return request
    }
    fetchBanner()
  },[])
 

   

  return (
    
      
     
     
      <Fragment>
        <NavbarVideo moviesDescription={moviesPosters?.overview} notHomePage={true} isMuted={false} title={moviesPosters?.title || moviesPosters?.original_title} imageSrc={`${base_url}${moviesPosters?.backdrop_path}`} videoSrc={false} ageRestriction="16+" navbarGenres={false}/>
        
        <div className={`row_big_genresMovies ${isBigRow=true  && "row_big"}`}>
        <h1 style={{color:"white", fontSize:"40px", marginLeft:"10px", fontWeight:"500"}}>Populare </h1>
      
        <Carousel
        
        slidesToSlide={4}
        customLeftArrow={isBigArrow? <LeftArrowBig/> : <LeftArrow/>}
        customRightArrow={isBigArrow? <RightArrowBig/> :<RightArrow/> }
        arrows={true}
        ssr={true}
        swipeable={false}
        responsive={responsive}
        draggable={false}
        infinite={true}
    
        customTransition="all 0.8s"
        itemClass={`item ${isBigRow && "big_poster_item"}`}
        dotListClass="UL"
        
          className="row__posters">
              
                {movies.map((movie, index) => (
                  
                <img className={`row_posters_images ${isBigRow && "row_posters_big"}`}
                onClick={()=>TrailerPlayHandler(movie)}
                key={index}
                src={`${base_url}${isBigRow? movie.poster_path : movie.backdrop_path}`}
                alt={movie.title}
                
            />
            
        ))}
     
      
        </Carousel>
            <Row title={NetflixHorrorTitle} fetchUrl={requests.fetchHorrorMovies}/>
            <Row title={NetflixActionMoviesTitle} fetchUrl={requests.fetchActionMovies}/>
            <Row title={NetflixComedyTitle} fetchUrl={requests.fetchComedyMovies}/>
            <Row title={NetflixRomanceTitle} fetchUrl={requests.fetchRomanceMovies}/>
      
      </div>
    
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
            <h2>{movies.original_title}</h2>
           
            
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

export default GenreSelectedMovies;
