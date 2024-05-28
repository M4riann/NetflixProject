import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../Components/footer.css"
const Footer = ({height=""}) =>{
    const [isHovered, setIsHovered] = useState(false)
    const [isHoveredLinkedIn, setIsHoveredLinkedId] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    const HandleMouseEnterLinkedIn = () =>{
        setIsHoveredLinkedId(true)
    }
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
      const HandleMouseLeaveLinkedIn = () =>{
        setIsHoveredLinkedId(false)

      }
    const redirectGitHub = () =>{
        window.open("https://github.com/M4riann/NetflixProject", "_blank")
    }
    const redirectLinkedIn = () =>{
        window.open("https://www.linkedin.com/in/marian-sîrbu-20b198176/", "_blank")
    }
    return(
        <div style={{height:`${height}`}} className="footer__container">
            <FaGithub onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={redirectGitHub} id="gitHubIcon"/>
            <FaLinkedin onMouseEnter={HandleMouseEnterLinkedIn} onMouseLeave={HandleMouseLeaveLinkedIn} onClick={redirectLinkedIn} id="linkedInIcon"/>
            {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '90%',
            left: '43%',
            marginTop: '10px',
            padding: '5px',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            color: '#fff',
            borderRadius: '3px',
            zIndex: 0,
            whiteSpace: 'nowrap',
            color:"white",
            fontFamily:"sans-serif"
          }}
        >
          Check my GitHub.
        </div>
      )}

        {isHoveredLinkedIn && (
              <div
              style={{
                position: 'fixed',
                top: '90%',
                left: '50%',
                marginTop: '10px',
                padding: '5px',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: '#fff',
                borderRadius: '3px',
                zIndex: 0,
                whiteSpace: 'nowrap',
                color:"white",
                fontFamily:"sans-serif"
              }}
            >
              Check my LinkedIn.
            </div>
        )}
        </div>
    )

}

export default Footer;