import React, { Fragment } from "react";
import NavbarVideo from "../Components/NavbarVideo";
import requests from "../requests";
import Row from "../Components/Row";
import GenreSelectedMovies from "../Components/GenreSelectedMovies";
import NoImageFound from "../images/NoImageFound";
const Filme = () =>{
    const NetflixHorrorTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de groază</h1>
    const NetflixActionMoviesTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de acțiune</h1>
    const NetflixComedyTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de comedie</h1>
    const NetflixRomanceTitle = <h1 className="titleRow" style={{color:"white"}}>Filme romantice</h1>

    const madMaxTitle = <h1 style={{fontFamily:"MadMaxTitle", fontSize:"50px"}}>Mad Max: Fury Road</h1>
    const MovieDesc = "Dupa disparitia unui baiat, un orasel descopera un mister care implica experimente secrete, forte supranaturale cutremuratoare si o fetita foarte ciudata."
    return(
        <Fragment>
       
            <NavbarVideo showGenresButons={true} moviesDescription={MovieDesc} imageSrc={false} videoSrc={require("../images/MadMaxTrailer.mp4")} title={madMaxTitle} ageRestriction="18+" navbarGenres={true}/>
            {/* <GenreSelectedMovies/> */}
            <Row title={NetflixHorrorTitle} fetchUrl={requests.fetchHorrorMovies}/>
            <Row title={NetflixActionMoviesTitle} fetchUrl={requests.fetchActionMovies}/>
            <Row title={NetflixComedyTitle} fetchUrl={requests.fetchComedyMovies}/>
            <Row title={NetflixRomanceTitle} fetchUrl={requests.fetchRomanceMovies}/>

        </Fragment>
    )

}

export default Filme;