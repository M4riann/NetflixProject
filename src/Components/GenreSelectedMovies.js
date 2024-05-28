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
import ActionGenresPages from './RowsGenresMovies/ActionGenresPages';
import RowAction from './RowsGenresMovies/RowActionFetch';
const base_url = "https://image.tmdb.org/t/p/original";
const FilmeActiuneTitle = <h1 style={{color:"white"}}>Filme de actiune</h1>
const FilmeActiuneAventuraTitle = <h1 style={{color:"white",fontFamily: "navBarTextFontMedium", fontSize:"35px"}}>Filme de actiune si aventura</h1>
const FilmeStintificoFantasticeTitle = <h1 style={{color:"white",fontFamily: "navBarTextFontMedium", fontSize:"35px"}}>Filme stintifico-fantastice</h1>
const FilmeSuperEroiTitle = <h1 style={{color:"white",fontFamily: "navBarTextFontMedium", fontSize:"35px"}}>Filme cu supereroi</h1>
const FilmeThrillerTitle = <h1 style={{color:"white",fontFamily: "navBarTextFontMedium", fontSize:"35px"}}>Filme thriller</h1>

function GenreSelectedMovies({isBigRow=true, isBigArrow=true}) {
  const [selectedGenre, setSelectedGenre] = useState();
  const [actionID, setActionID] = useState([])
  const [trailerURL, setIsTrailerURL] = useState("");
  const [openModal, isOpelModal] = useState(false)
  const [movies, setMovies] = useState([]);
  const [moviesPosters, setIsMoviePoster] = useState([]);
  const { genreId } = useParams();
  const [key, setKey] = useState(0);

  const [showTitle, setTitle] = useState(false)



  useEffect(() => {
    async function fetchMoviesByGenre() {
      const API_KEY = process.env.REACT_APP_TMDB_KEY
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
        const response = await axios.get(url);
        setMovies(response.data.results);
        return response;
    }
    fetchMoviesByGenre();
  }, [genreId]);




  const ModalOpenereHandler = () =>{
    
    isOpelModal(false);
   }

  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 2, 
    
    },
    
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
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
      const request = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_genres=${genreId}`)
      setIsMoviePoster(
        
          request.data.results[
        Math.floor(Math.random() * request.data.results.length-1)

          ],

      );
      return request
    }
    fetchBanner()
  },[])
 
  useEffect(()=>{
     movies.map((movie)=>{
       setActionID(movie.genre_ids[1])
      })
    })
    const ShowTitle = (movie) =>{
      setTitle(movie)
  
    }
  const HideTitle = () =>{
    setTitle(false)
  }
  useEffect(() => {
    if (moviesPosters && !moviesPosters.backdrop_path) {
      setKey(prevKey => prevKey + 1);
    }
  }, [moviesPosters]);

  if (!moviesPosters) {
    window.location.reload()
    return(
      <div>Loading..</div>
    )
    
    
  }

  return (
    
      
     
     
      <Fragment>
        <NavbarVideo  key={key} moviesDescription={moviesPosters?.overview} notHomePage={true} isMuted={false} title={moviesPosters?.title || moviesPosters?.original_title} imageSrc={moviesPosters.backdrop_path? `${base_url}${moviesPosters?.backdrop_path}` : null } videoSrc={false} ageRestriction="16+" navbarGenres={false}/>
        
        <div className={`row_big_genresMovies ${isBigRow=true  && "row_big"}`}>
        <h1 style={{color:"white", marginLeft:"10px", fontWeight:"500",fontFamily: "navBarTextFontMedium", fontSize:"35px"}}>Populare de 
        {genreId === '28'? " actiune" : ""}
        {genreId === '35'? " comedie" : ""}
        {genreId === '12'? " aventura" : ""}
        {genreId === '80'? " crime" : ""}
        {genreId === '99'? " documentare" : ""}
        {genreId === '10751'? " familie" : ""}
        {genreId === '14'? " fantezie" : ""}
        {genreId === '27'? " groaza" : ""}
        {genreId === '36'? " istorie" : ""}
        {genreId === '18'? " drama" : ""}
        </h1>
      
        <Carousel
        
        slidesToSlide={4}
        customLeftArrow={ <LeftArrowBig/> }
        customRightArrow={<RightArrowBig/>  }
        arrows={true}
        ssr={true}
        swipeable={false}
        responsive={responsive}
        draggable={false}
        infinite={true}
    
        customTransition="all 0.8s"
        itemClass="big_poster_item"
        
          className="row__posters">
              
                {movies.map((movie, index) => (
                  <div
                  onMouseEnter={()=>ShowTitle(movie)}
                  onMouseLeave={HideTitle}
                  key={index} 
                  >
                <img 
                className="row_posters_big"
                src={`${base_url}${movie.poster_path}`}
                alt={movie.title}/>
                {showTitle === movie &&
                   ( <div id="titleContainer">
                   
                   <button onClick={()=>TrailerPlayHandler(movie)} id="trailerPlay" className={`${isBigRow && "buttonOnHoverBigRow"} `}  style={{color:"white", position:"fixed",top:"-5px", left:"0px", width:"220px"}}>Play Trailer</button>
                   </div>
                )}
            </div>
        ))}
   
      
        </Carousel>
              {actionID === 28?
              <div  >
              <RowAction  title={FilmeActiuneAventuraTitle} fetchActionMovies={ActionGenresPages.fetchActionPage2}/>
              <RowAction  title={FilmeStintificoFantasticeTitle} fetchActionMovies={ActionGenresPages.fetchActionPage3}/>
              <RowAction  title={FilmeSuperEroiTitle} fetchActionMovies={ActionGenresPages.fetchActionPage4}/>
              <RowAction  title={FilmeThrillerTitle} fetchActionMovies={ActionGenresPages.fetchActionPage5}/>
              </div>
            :null}
               
            
             

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
