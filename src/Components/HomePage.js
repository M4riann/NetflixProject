import React , {Fragment, useState, useRef}from "react";
import requests from "../requests";
import Row from "./Row";
import Navbar from "./Navbar";
import "../Components/HomePage.css"
import { GrVolumeMute } from "react-icons/gr";
import { GoUnmute } from "react-icons/go";
import { IoPlay } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";





const HomePage = () =>{

    const videoRef = useRef(null);
    const [muted, setMuted] = useState(false);
    const toggleAudio = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setMuted(videoRef.current.muted);
      }
    };
    

    const NetflixOriginalTitle = <h1 className="titleRow" style={{color:"white"}}>Originale Netflix</h1>
    const NetflixTrendingTitle = <h1 className="titleRow" style={{color:"white"}}>În tendințe</h1>
    const NetflixTopRatedTitle = <h1 className="titleRow" style={{color:"white"}}>Rating de top</h1>
    const NetflixActionMoviesTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de acțiune</h1>
    const NetflixComedyTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de comedie</h1>
    const NetflixHorrorTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de groază</h1>
    const NetflixRomanceTitle = <h1 className="titleRow" style={{color:"white"}}>Filme romantice</h1>
    const NetflixDocumentariesTitle = <h1 className="titleRow" style={{color:"white"}}>Documentare</h1>
            return(
            <Fragment>
              <div  className="homepageBackground">
               
              <Navbar/>
              <video  ref={videoRef} className="backgroundVideo" src={require("../images/STtrailer.mp4")} muted loop autoPlay type="video/mp4">
            
              </video>
              <button id="toggleButton"  onClick={toggleAudio}>{muted ? <GrVolumeMute className="soundButtons" /> : <GoUnmute className="soundButtons"/>}</button>
              <p id="ageRestriction">16+</p>
                <div id="onScreenDetails">
                    <h1 id="strangerThingsTitle">STRANGER THINGS</h1>
                    <div className="onScreenButtons"> 
                    <button className="strangerThingsPlayButton "> {<IoPlay className="strangerThingsPlayIcon"/>}Redare</button>
                    <button className="strangerThingsInfo"> {<CiCircleInfo className="strangerThingsInfoIcon" />}Mai multe informații</button>
                    </div>
              </div>
              </div>
               
                    <Row title={NetflixOriginalTitle} fetchUrl={requests.fetchNetflixOriginals}/>
                    <Row title={NetflixTrendingTitle} fetchUrl={requests.fetchTrending}/> 
                    <Row title={NetflixTopRatedTitle}fetchUrl={requests.fetchTopRated}/>
                    <Row title={NetflixActionMoviesTitle} fetchUrl={requests.fetchActionMovies}/>
                    <Row title={NetflixComedyTitle} fetchUrl={requests.fetchComedyMovies}/>
                    <Row title={NetflixHorrorTitle} fetchUrl={requests.fetchHorrorMovies}/>
                    <Row title={NetflixRomanceTitle} fetchUrl={requests.fetchRomanceMovies}/>
                    <Row title={NetflixDocumentariesTitle} fetchUrl={requests.fetchDocumentaries}/>  
              
            </Fragment>

        )


  };
  
export default HomePage;
