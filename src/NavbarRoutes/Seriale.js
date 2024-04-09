import React, { Fragment } from "react";
import Row from "../Components/Row";
import requests from "../requests";
const Seriale = () =>{

    return(
        <Fragment>
            <h1>Serialew</h1>
            <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
        </Fragment>
      

    )


}

export default Seriale;