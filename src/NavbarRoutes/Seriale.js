import React, { Fragment, useState, useEffect } from "react";
import Row from "../Components/Row";
import requests from "../requests";
import axios from "axios";
import ReactPlayer from "react-player";
import LeftArrow from "../Components/SliderArrows/LeftArrow";
import LeftArrowBig from "../Components/SliderArrows/leftArrowBig";
import RightArrow from "../Components/SliderArrows/RightArrow"
import movieTrailer from "movie-trailer";
import Carousel from 'react-multi-carousel';
import NavbarVideo from "../Components/NavbarVideo";
import ReactModal from "react-modal";
import RightArrowBig from "../Components/SliderArrows/RightArrowBig";
import Footer from "../Components/Footer";
const base_url = "https://image.tmdb.org/t/p/original";
const NetflixFantezieTitle = <h1 className="titleRow" style={{color:"white"}}>Seriale de fantezie</h1>
    const NetflixDramaMoviesTitle = <h1 className="titleRow" style={{color:"white"}}>Seriale de drama</h1>
    const NetflixComedyTitle = <h1 className="titleRow" style={{color:"white"}}>Seriale de comedie</h1>
    const NetflixActiuneTitle = <h1 className="titleRow" style={{color:"white"}}>Seriale de actiune si aventura</h1>
const Seriale = ({isBigRow=true, isBigArrow=true}) =>{
    const [setTVSerie, setIsTVSerie] = useState([])
    const [trailerURL, setIsTrailerURL] = useState("");
    const [openModal, isOpelModal] = useState(false)
    const [moviesPosters, setIsMoviePoster] = useState([]);
    const [showTitle, setTitle] = useState(false)
    const [key, setKey] = useState(0);

    useEffect(()=>{
        async function fetchTv(){
            const request = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}`)
            setIsTVSerie(request.data.results)
            return request
        }
       fetchTv()

    },[])
    useEffect(()=>{
        async function fetchBanner(){
          const request = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}`)
          setIsMoviePoster(
            
              request.data.results[
            Math.floor(Math.random() * request.data.results.length-1)
    
              ],
    
          );
          return request
        }
        fetchBanner()
      },[])
    const TrailerPlayHandler = ( setTVSerie) =>{
        if(trailerURL){
          setIsTrailerURL("");  
              
        }else{
          movieTrailer(setTVSerie?.title || setTVSerie?.name  || "" )
          
          .then((url)=>{
            const urlParams = new URLSearchParams(new URL(url).search);
            urlParams.get("v");
            setIsTrailerURL(url)
          })
         
          .catch((error)=>{
            isOpelModal(false);
            window.alert("Nu s-a putut gasi trailer pentru acest film, incercati altul")
          })
            
        
        
         isOpelModal(true);
      }}
    
      const ModalOpenereHandler = () =>{
    
        isOpelModal(false);
       }
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items:8,
          slidesToSlide: 2, // optional, default to 1.
        
        },
        
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 8,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
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
    return(
        <Fragment>
           
        <NavbarVideo key={key} moviesDescription={"No overview available :("} notHomePage={true} isMuted={false} title={moviesPosters?.name || moviesPosters?.original_name} imageSrc={moviesPosters.backdrop_path? `${base_url}${moviesPosters?.backdrop_path}` : null } videoSrc={false} ageRestriction="16+" navbarGenres={false} showGenresButons={false}/>
        
        <div className={`row_big_genresMovies ${isBigRow=true  && "row_big"}`}>
        <h1 style={{color:"white", fontSize:"40px", marginLeft:"10px", fontWeight:"500"}}>Populare </h1>
      
        <Carousel
        
        slidesToSlide={4}
        customLeftArrow={<LeftArrowBig/>}
        customRightArrow={<RightArrowBig/>}
        arrows={true}
        ssr={true}
        swipeable={false}
        responsive={responsive}
        draggable={false}
        infinite={true}
    
        customTransition="all 0.8s"
        itemClass="big_poster_item"
        dotListClass="UL"
        
          className="row__posters">
              
                {setTVSerie.map((tvSerie, index) => (
                  <div
                  onMouseEnter={()=>ShowTitle(tvSerie)}
                  onMouseLeave={HideTitle}
                  key={index} 
                  >
                    <img className="row_posters_big"
                    src={`${base_url}${isBigRow? tvSerie.poster_path : tvSerie.backdrop_path}`}
                    alt={tvSerie.title}
                    
                />
                 {showTitle === tvSerie && 
                       ( <div id="titleContainer">
                        <p id="titleOnHover"  style={{color:"white", position:"fixed", top:"58px"}}>{tvSerie.title}</p>
                        <button onClick={()=>TrailerPlayHandler(tvSerie)} id="trailerPlay" className={`${isBigRow && "buttonOnHoverBigRow"} `}  style={{color:"white", position:"fixed", top:"260px", width:"220px", left:"0px"}}>Play Trailer</button>
                        </div>)}
                  </div>
        ))}
     
      
        </Carousel>
        <Row title={NetflixActiuneTitle} fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=99bc588833b8b6037db6de38b3d64d46&with_genres=10759&page=1"}/>
            <Row title={NetflixComedyTitle}fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=99bc588833b8b6037db6de38b3d64d46&with_genres=35&page=1"}/>
            <Row title={NetflixDramaMoviesTitle} fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=99bc588833b8b6037db6de38b3d64d46&with_genres=18&page=1"}/>
            <Row title={NetflixFantezieTitle} fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=99bc588833b8b6037db6de38b3d64d46&with_genres=10765&page=1"}/>
            <Footer height="120px"/>

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
    
      

    )


}


export default Seriale;