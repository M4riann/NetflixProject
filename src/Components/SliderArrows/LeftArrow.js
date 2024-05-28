import React from "react";
import "../SliderArrows/leftArrow.css"
import { MdKeyboardArrowLeft } from "react-icons/md";

 const LeftArrow = ({ onClick ,...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return (
        <button className="react-multiple-carousel__arrow--left" onClick={() => onClick()} ><MdKeyboardArrowLeft style={{width:"50px", height:"192px", color:"white"}}/>
        </button>
    )
}

export default LeftArrow;