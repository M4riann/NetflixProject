import React , {Fragment}from "react";
import requests from "../requests";
import Row from "./Row";
import Navbar from "./Navbar";
import "../Components/HomePage.css"
const HomePage = () =>{
  
            return(
            <Fragment>
              <div  className="homepageBackground">
              <Navbar/>
              </div>
              
                <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
                <Row title="TRENDING" fetchUrl={requests.fetchTrending}/> 
                {/* <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
                <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
                <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
                <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
                <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
                <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>  */}

            </Fragment>

        )


  };
  
export default HomePage;
