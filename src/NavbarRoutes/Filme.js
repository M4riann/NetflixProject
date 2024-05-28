import React, { Fragment } from "react";
import NavbarVideo from "../Components/NavbarVideo";
import requests from "../requests";
import Row from "../Components/Row";
import GenreSelectedMovies from "../Components/GenreSelectedMovies";
import NoImageFound from "../images/NoImageFound";
import Footer from "../Components/Footer";
const Filme = () =>{
    const NetflixHorrorTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de groază</h1>
    const NetflixActionMoviesTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de acțiune</h1>
    const NetflixComedyTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de comedie</h1>
    const NetflixRomanceTitle = <h1 className="titleRow" style={{color:"white"}}>Filme romantice</h1>

    const madMaxTitle = <h1 style={{fontFamily:"MadMaxTitle", fontSize:"50px"}}>Mad Max: Fury Road</h1>
    const MovieDesc = "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max."
    return(
        <Fragment>
       
            <NavbarVideo showGenresButons={true} moviesDescription={MovieDesc} imageSrc={false} videoSrc={require("../images/MadMaxTrailer.mp4")} title={madMaxTitle} ageRestriction="18+" navbarGenres={true}/>
            <div style={{position:"relative", top:"8%"}}>            
            <Row title={NetflixHorrorTitle} fetchUrl={requests.fetchHorrorMovies}/>
            <Row title={NetflixActionMoviesTitle} fetchUrl={requests.fetchActionMovies}/>
            <Row title={NetflixComedyTitle} fetchUrl={requests.fetchComedyMovies}/>
            </div>
            <Footer height="15%"/>
        </Fragment>
    )

}

export default Filme;