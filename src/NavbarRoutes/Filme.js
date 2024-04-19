import React, { Fragment } from "react";
import NavbarVideo from "../Components/NavbarVideo";
import requests from "../requests";
import Row from "../Components/Row";
const Filme = () =>{
    const NetflixHorrorTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de groază</h1>
    const NetflixActionMoviesTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de acțiune</h1>
    const NetflixComedyTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de comedie</h1>
    const NetflixRomanceTitle = <h1 className="titleRow" style={{color:"white"}}>Filme romantice</h1>

    const madMaxTitle = <h1 style={{fontFamily:"MadMaxTitle", fontSize:"65px"}}>Mad Max: Fury Road</h1>
    return(
        <Fragment>
            <NavbarVideo videoSrc={require("../images/MadMaxTrailer.mp4")} title={madMaxTitle} ageRestriction="18+"/>
            <Row title={NetflixHorrorTitle} fetchUrl={requests.fetchHorrorMovies}/>
            <Row title={NetflixActionMoviesTitle} fetchUrl={requests.fetchActionMovies}/>
            <Row title={NetflixComedyTitle} fetchUrl={requests.fetchComedyMovies}/>
            <Row title={NetflixRomanceTitle} fetchUrl={requests.fetchRomanceMovies}/>

        </Fragment>
    )

}

export default Filme;