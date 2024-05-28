import React , {Fragment} from "react";
import requests from "../requests";
import Row from "./Row";
import "../Components/NavbarVideoHomePage.css"
import NavbarVideo from "./NavbarVideo";
import GenreSelectedMovies from "./GenreSelectedMovies";
import RowAction from "./RowsGenresMovies/RowActionFetch";
import ActionGenresPages from "./RowsGenresMovies/ActionGenresPages"
import Footer from "./Footer";


const HomePage = () =>{
    const NetflixTrendingTitle = <h1 className="titleRow" style={{color:"white"}}>În tendințe</h1>
    const NetflixTopRatedTitle = <h1 className="titleRow" style={{color:"white"}}>Rating de top</h1>
    const NetflixActionMoviesTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de acțiune</h1>
    const NetflixComedyTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de comedie</h1>
    const NetflixHorrorTitle = <h1 className="titleRow" style={{color:"white"}}>Filme de groază</h1>
    const NetflixDocumentariesTitle = <h1 className="titleRow" style={{color:"white"}}>Documentare</h1>
    const StrangerThingsDesc = "Dupa disparitia unui baiat, un orasel descopera un mister care implica experimente secrete, forte supranaturale cutremuratoare si o fetita foarte ciudata."
            return(
            <Fragment>
                  <NavbarVideo showGenresButons={false} isMuted={true} moviesDescription={StrangerThingsDesc} imageSrc={false} videoSrc={require("../images/STtrailer.mp4")} title="STRANGER THINGS" ageRestriction="16+" navbarGenres={false} notHomePage={false}/>
                    <Row title={NetflixTrendingTitle} fetchUrl={requests.fetchTrending} isBigArrow={false}/> 
                    <Row title={NetflixTopRatedTitle}fetchUrl={requests.fetchTopRated} isBigArrow={false}/>
                    <Row title={NetflixActionMoviesTitle} fetchUrl={requests.fetchActionMovies}/>
                    <Row title={NetflixComedyTitle} fetchUrl={requests.fetchComedyMovies}/>
                    <Row title={NetflixHorrorTitle} fetchUrl={requests.fetchHorrorMovies}/>
                    <Row title={NetflixDocumentariesTitle} fetchUrl={requests.fetchDocumentaries}/>  
                    <Footer height="15%"/>
            </Fragment>
        )


  };
  
export default HomePage;
