import React from "react";
import "../NavbarRoutes/NoPage.css"
import { Link } from "react-router-dom";

const NoPage = () => {
    return(
            <div id="container">
                <h1 className="containerTitle">Te-ai pierdut?</h1>
                <h2 className="containerText">Ne pare rau, pagina nu a fost gasita. Vei avea multe de explorat pe pagina principala.</h2>
                <div >
                    <Link id="homeButton" to="/">Home</Link>
                </div>
            </div>
    )



}
export default NoPage;