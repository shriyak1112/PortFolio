import React , { useContext } from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };




  return (
    <div className='services' id='Services'>
         <div className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
        As a hardworking and determined full stack developer,
        <br/>
        I blend my expertise in design, front-end, and
        <br/>
          back-end to deliver exceptional web solutions.

        </spane>

        <button className='button s-button'>Download CV</button>

        <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
        </div>

        <div className='cards'>

         <motion.div 
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
        <Card
        emoji={HeartEmoji}
        heading ={'Design'}
        detail={"Figma, Sketch, Photoshop, Adobe"}
        />
        </motion.div>


        <motion.div 
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
        <Card
        emoji={Glasses}
        heading ={'Frontend'}
        detail={"HTML, CSS, Javascript, React JS, Bootstrap, Tailwaind"}
        />
        </motion.div>

        <motion.div 
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
      >
        <Card
        emoji={Humble}
        heading ={'Backend'}
        detail={"Node JS, Express JS, MongoDB, MySQL"}
        />
        </motion.div>

        <div className='blur s-blur2' style={{background:'var(--purple'}}></div>

        </div>

      
    </div>
  )
}

export default Services
