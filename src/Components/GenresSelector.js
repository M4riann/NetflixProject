import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/GenreSelector.css"

const GenresSelector = () =>{

    const navigate = useNavigate();
   
  
      const handleSubmit = (selectedGenre) => {
        
        navigate(`/movies/${selectedGenre}`);
        setTimeout(() => {
          window.location.reload();
        }, 50);
      };
    return(
        <div  id="genresContainer">
            <button className="selectorButtons" onClick={()=>handleSubmit(28)}>Actiune</button>
            <button className="selectorButtons" type="submit" onClick={()=>handleSubmit(12)}>Aventura</button>
            <button className="selectorButtons" type="submit" onClick={()=>handleSubmit(35)}>Comedie</button>
            <button className="selectorButtons" type="submit" onClick={()=>handleSubmit(80)}>Criminal</button>
            <button className="selectorButtons" type="submit" onClick={()=>handleSubmit(99)}>Documentare</button>
            <button className="selectorButtons" type="submit" onClick={()=>handleSubmit(10751)}>De familie</button>
            <button className="selectorButtons" type="submit" onClick={()=>handleSubmit(14)}>Fantezie</button>
            <button className="selectorButtons" type="submit" onClick={()=>handleSubmit(27)}>Horror</button>
            <button className="selectorButtons" type="submit" onClick={()=>handleSubmit(36)}>Istorice</button>
            <button className="selectorButtons" type="submit" onClick={()=>handleSubmit(18)}>Drama</button>

        </div>
    )
}

export default GenresSelector;