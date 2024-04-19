import React , {Fragment} from "react";
import requests from "../requests";
import Row from "./Row";
import "../Components/NavbarVideoHomePage.css"
import NavbarVideo from "./NavbarVideo";






const HomePage = () =>{
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
                  <NavbarVideo videoSrc={require("../images/STtrailer.mp4")} title="STRANGER THINGS" ageRestriction="16+"/>
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
