import React, {useEffect, useState, Fragment } from "react";

import axios from "axios";
import "../Row.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RightArrow from "../SliderArrows/RightArrow"
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";
import ReactModal from "react-modal";
import LeftArrow from "../SliderArrows/LeftArrow";
const base_url = "https://image.tmdb.org/t/p/original";

const RowAction = ({title,fetchActionMovies, isActionMovie=[]}) =>{
    const [actionMovies, setActionMovies] = useState([]);
    const [trailerURL, setIsTrailerURL] = useState("");
    const [selectedMovie, isSelectedMovie] = useState(null)
    const [openModal, isOpelModal] = useState(false)
    const [isError, setIsError] = useState(false);
    const [showTitle, setTitle] = useState(false)
    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchActionMovies);
          setActionMovies(request.data.results)
          return request;
        }
        fetchData();
      }, [fetchActionMovies]);
    
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    
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
     
      .catch((error)=>{
        isOpelModal(false);
        window.alert("Nu s-a putut gasi trailer pentru acest film, incercati altul")
      })
        

    }
    
    
     isOpelModal(true);
  }
   const ModalOpenereHandler = () =>{
    
   isOpelModal(false);
  }
  const ShowTitle = (movie) =>{
    setTitle(movie)

  }
const HideTitle = () =>{
  setTitle(false)
}
  return (
     <Fragment>
          

        <div className="row">
        <h2>{title}</h2>
      
        <Carousel
        
        slidesToSlide={4}
        customLeftArrow={<LeftArrow/>}
        customRightArrow={<RightArrow/>}
        arrows={true}
        swipeable={false}
        responsive={responsive}
        draggable={false}
        infinite={true}
    
        customTransition="all 0.8s"
        itemClass="item "
        
          className="row__posters">
            {actionMovies.map((movie, index) => (
                  <div 
                onMouseEnter={()=>ShowTitle(movie)}
                onMouseLeave={HideTitle}
                key={index} 
                >
                
                  
                <img 
                src={`${base_url}${movie.backdrop_path}`}
                className="row_posters_images item"
                />
                        {showTitle === movie && 
                       ( <div id="titleContainer">
                        <p id="titleOnHover"  style={{color:"white", position:"fixed", top:"58px"}}>{movie.title}</p>
                        <button onClick={()=>TrailerPlayHandler(movie)} id="trailerPlay"   style={{color:"white", position:"fixed", top:"100px"}}>Play Trailer</button>
                        </div>)}
                </div>  

        ))}

      
     
      </Carousel>
      
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

export default RowAction;