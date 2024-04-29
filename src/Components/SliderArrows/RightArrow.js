import React from "react";
import "../SliderArrows/rightArrow.css"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CustomRightArrow = ({ onClick, isBigArrow=true, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    
    return (
        <button className= "smallArrowRight" onClick={() => onClick()} ><MdOutlineKeyboardArrowRight style={{width:"50px", height:"192px", color:"white"}}/></button>
    )
}

export default CustomRightArrow;