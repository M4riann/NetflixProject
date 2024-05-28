import React, { Fragment, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar.css"
import "../images/netflixLogo.png"
import SearchEngine from "../Components/SearchEngine"
import { IoSearchOutline } from "react-icons/io5";
import { useClickAway } from "@uidotdev/usehooks";
import GenresButtons from "./GenresButtons";
const Navbar = ({isSearchBarNavbar=false, position="fixed"}) => {
    const [navColor, setNavColor] = useState("transparent")
    const [searchIcon, setSearchIcon] = useState(false)
    const ref = useClickAway(() => {
      setSearchIcon(false);
    });
  
    useEffect(() => {
      const listenScrollEvent = () => {
        window.scrollY > 25 ? setNavColor("#090909") : setNavColor("transparent");
      };
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    },[]);
   

    const SearchIconHandler = () => {
      setSearchIcon(true);
    };

    const HideSearchIcon = () =>{
      setSearchIcon(false)
    }
    return(
            <Fragment>
                 <div className={isSearchBarNavbar ? 'navbar__search' : 'navBar'}
                  style={{
                    backgroundColor: navColor,
                    opacity: "0.95",
                    transition: "all 0.9s",
                    position:position

                  }}
                  >
                     
                    <div className='navBar__homePage'>
                        <Link className="navBar__home" to="/">{
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

                  

               
                    <div  className="navBar__searchBar">
                            {searchIcon?(
                              <div className="searchBarIconAnimation" ref={ref} onClick={() =>HideSearchIcon}>
                              <SearchEngine />
                              </div>
                            ):(
                              <div  onClick={SearchIconHandler}>
                              <IoSearchOutline className="searchBarIcon"/>
                              </div>
                            )}
                    </div>
                   
                </div>
              
            </Fragment>
        )
}

export default Navbar;