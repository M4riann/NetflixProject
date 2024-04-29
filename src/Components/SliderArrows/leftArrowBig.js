import React from "react";
import "../SliderArrows/leftArrow.css"
import { MdKeyboardArrowLeft } from "react-icons/md";

const LeftArrowBig = ({ onClick, isBigArrow=true ,...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return (
        <button className="bigArrowLeft" onClick={() => onClick()} ><MdKeyboardArrowLeft style={{width:"50px", height:"192px", color:"white"}}/></button>
    )
}

export default LeftArrowBig;