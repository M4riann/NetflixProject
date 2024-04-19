import React, { Fragment, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar.css"
import "../images/netflixLogo.png"

const Navbar = () => {
    const [navColor, setNavColor] = useState("transparent")

    const listenScrollEvent = () => {
      window.scrollY > 25 ? setNavColor("#090909") : setNavColor("transparent");
      
    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);
    
    const activeColor= ["white", "green"]
    
    return(
            <Fragment>
                 <div className='navBar'
                  style={{
                    backgroundColor: navColor,
                    opacity: "0.95",
                    transition: "all 0.9s"
                    
                  }}
                  >
                     
                    <div className='navBar__homePage'>
                        <Link className="navBar__home" to="/homePage">{
                            <img id="logo" src={require("../images/netflixLogo.png")} alt="netflixLogo"/>
                                                                                                        }
                        </Link>
                    </div>

                    <div className='navBar__seriale'>
                        <Link  className="navbarSerialeTag navBarText" to="/seriale">Seriale</Link>
                    </div>

                    <div className='navBar__filme'>
                        <Link className="navbarFilmeTag navBarText" to="/filme">Filme</Link>
                    </div>

                    <div className="navBar__filtrare">
                        <Link className="navbarFiltrareTag navBarText" to="/filtrare">Răsfoieste după limbă</Link>
                    </div>

                    <div className="navBar__noiTrending">
                        <Link className="navbarTrendingTag navBarText" to="/noi-trending">Noi și populare</Link>
                    </div>
                    {/* <div  className="navBar__searchBar">
                      <SearchEngine fetchUrl={requests.fetchNetflixOriginals}/>
                    </div> */}
                </div>
            </Fragment>
        )
}

export default Navbar;