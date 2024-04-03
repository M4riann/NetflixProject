import React, { Fragment, useEffect, useState, useRef } from "react";
import axios from "../axios";
import "../Components/Row.css" 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const base_url = "https://image.tmdb.org/t/p/original";




const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
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
  
  return (
    
        <div className="row">
        <h2>{title}</h2>
        {/* <button className="PreviousButton" onClick={previous}>
          Previous
        </button> */}
        <Carousel
        swipeable={false}
        responsive={responsive}
        draggable={false}
        infinite={true}
        customTransition="all 0.8s"
        itemClass="item"
        dotListClass="UL"
        
          className="row__posters">
             
                {movies.map((movie, index) => (

                <img className="row_posters_images"

                key={index}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
                
            />

        ))}
      
      
     
      </Carousel>
       
      {/* <button className="NextButton" onClick={next}>
          Next
        </button> */}
    </div>
    
  )
};

export default Row;
