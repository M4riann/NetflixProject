import React, {useState, useRef} from "react";
import Navbar from "./Navbar";
import { GrVolumeMute } from "react-icons/gr";
import { GoUnmute } from "react-icons/go";
import { FaPlay } from "react-icons/fa6";
import { LuInfo } from "react-icons/lu";
import "../Components/NavbarVideoHomePage.css"
const NavbarVideo = ({title="", videoSrc=URL, ageRestriction=""}) =>{
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(false);
    
    const toggleAudio = () => {
        if (videoRef.current) {
          videoRef.current.muted = !videoRef.current.muted;
          setMuted(videoRef.current.muted);
        }
      };
      
  
      const AlertPlayHandler = () =>{
        window.alert("Acest site este doar de prezentare.")
  
      }
    return(
        <div  className="homepageBackground">
               
              <Navbar/>
              <video  ref={videoRef} className="backgroundVideo" src={videoSrc} muted loop autoPlay type="video/mp4">
            
              </video>
              <button id="toggleButton"  onClick={toggleAudio}>{muted ? <GrVolumeMute className="soundButtons" /> : <GoUnmute className="soundButtons"/>}</button>
              <p id="ageRestriction">{ageRestriction}</p>
                <div id="onScreenDetails">
                    <h1 className="strangerThingsTitle MadMaxTtile">{title}</h1>
                    <div className="onScreenButtons"> 
                    <button onClick={AlertPlayHandler} className="strangerThingsPlayButton "> {<FaPlay className="strangerThingsPlayIcon"/>}Redare</button>
                    <button onClick={AlertPlayHandler} className="strangerThingsInfo"> {<LuInfo className="strangerThingsInfoIcon" />}Mai multe informații</button>
                    </div>
              </div>
              </div>
    )

}

export default NavbarVideo;