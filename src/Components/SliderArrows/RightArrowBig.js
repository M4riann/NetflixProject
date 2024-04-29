import React from "react";
import "../SliderArrows/rightArrow.css"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const RightArrowBig = ({ onClick,  ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    
    return (
        <button className= "bigArrowRight" onClick={() => onClick()} ><MdOutlineKeyboardArrowRight style={{width:"50px", height:"192px", color:"white"}}/></button>
    )
}
 

export default RightArrowBig;