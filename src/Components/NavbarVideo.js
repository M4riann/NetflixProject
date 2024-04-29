import React, {useState, useRef} from "react";
import Navbar from "./Navbar";
import { GrVolumeMute } from "react-icons/gr";
import { GoUnmute } from "react-icons/go";
import { FaPlay } from "react-icons/fa6";
import { LuInfo } from "react-icons/lu";
import "../Components/NavbarVideoHomePage.css"
import Row from "./Row";
import requests from "../requests";
import GenreSelectedMovies from "./GenreSelectedMovies";
import NavbarGenres from "../Components/NavbarGenres"
import GenresButtons from "./GenresButtons";
const base_url = "https://image.tmdb.org/t/p/original";

const NavbarVideo = ({ isRefresh=false,showGenresButons=true,moviesDescription,isMuted=false ,title="", imageSrc=false, videoSrc=URL, ageRestriction="", navbarGenres=false, notHomePage=false}) =>{
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(false);
    const [setTitle, setIsTitle] =  useState("")
    
    const NetflixOriginalTitle = <h1 className="titleRow" style={{color:"white"}}>Originale Netflix</h1>
    const toggleAudio = () => {
        if (videoRef.current) {
          videoRef.current.muted = !videoRef.current.muted;
          setMuted(videoRef.current.muted);
        }
      };
      
  
      const AlertPlayHandler = () =>{
        window.alert("Acest site este doar de prezentare.")
  
      }

      // const refresh = (selectedGenre) =>{
      //   window.location.reload(selectedGenre);
      // }
   const GenresAudioMissing = () =>{
      window.alert("Nu putem furniza sonor.")
   }
    return(
        <div  className="homepageBackground">
               
             <Navbar/>
              { imageSrc? <img id="bannerBackground" src={imageSrc} className="backgroundVideo" alt="Movie Back drop" ></img> :  <video  ref={videoRef} className="backgroundVideo" src={videoSrc} muted loop autoPlay type="video/mp4"/>}
              {showGenresButons? <GenresButtons/> : null}

             
              <div className="audioAgeRestriction">
              <button id="toggleButton"  onClick={isMuted? toggleAudio : GenresAudioMissing}>{muted ? <GrVolumeMute className="soundButtons" /> : <GoUnmute className="soundButtons"/>}</button>
              <p id="ageRestriction">{ageRestriction}</p>
              </div>
                <div id="onScreenDetails">
                    <h1 className="strangerThingsTitle MadMaxTtile">{title}</h1>
                    <div style={{marginBottom:"40px"}}>
                      <p style={{position:"relative",left:"-3%",maxHeight:"8%",maxWidth:"30%", color:"white", fontSize:"25px", fontWeight:"lighter", marginBottom:"20px"}}>{moviesDescription}</p>
                    </div>
                    <div className="onScreenButtons"> 
                    <button onClick={AlertPlayHandler} className="strangerThingsPlayButton "> {<FaPlay className="strangerThingsPlayIcon"/>}Redare</button>
                    <button onClick={AlertPlayHandler} className="strangerThingsInfo"> {<LuInfo className="strangerThingsInfoIcon" />}Mai multe informații</button>
                    
                    
                    </div>
                    {notHomePage? null :  <Row  isBigArrow={true} isBigRow={true} title={NetflixOriginalTitle} fetchUrl={requests.fetchNetflixOriginals}/>}
              </div>
             
              </div>
    )

}

export default NavbarVideo;