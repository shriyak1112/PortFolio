import React, { useContext } from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import thumbup from '../../img/thumbup.png';
import glassesimoji from '../../img/glassesimoji.png';
import Crown from '../../img/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { motion } from "framer-motion"
import { Link } from 'react-scroll';


const Intro = () => {
    const transition = {duration:2,type:'spring'}

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
  <div className='intro'>
    <div className='i-left'>
        <div className='i-name'>
            <span  style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
            <span>Shriya Kumari</span>
            <span>
            Enthusiastic novice full stack developer with a penchant for learning, creating, and collaborating on web solutions.
            </span>
            </div>
             <Link to="contact" spy={true} smooth={true}>
            <button className='i-button button '>Hire me</button>
            </Link>
            <div className='i-icon'>
          <a href="https://github.com/shriyak1112" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
                <img src={Instagram} alt=""/>
          <a href="https://www.linkedin.com/in/shriya-kumari-b76643243" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>

            </div>

     

    </div>
    <div className='i-right'>
    <img src={Vector1} alt=""/>
    <img src={Vector2} alt=""/>

    <motion.img 
    initial = {{left:'-36%'}}
    whileInView={{left :'-24%'}}
    transition={transition}
    src={glassesimoji} alt=""/>


    <motion.div
    initial={{ top: "-4%", left: "80%" }}
    whileInView={{ left: "64%" }}
    transition={transition}
    className="floating-div"
   >
          <FloatingDiv image={Crown} txt1='Tech-savvy' txt2='innovator' 
        />

    </motion.div>

    <motion.div
     initial={{ left: "10rem", top: "14rem" }}
     whileInView={{ left: "0rem" }}
     transition={transition}
     className="floating-div"
   > 
          <FloatingDiv image={thumbup} txt1='Creative' txt2='problem solver'/>

    </motion.div>

    {/* blur div */}


    <div className='blur' style={{background:"rgb(238 210 255)"}}></div>

    <div className='blur' style={{background:'#C1F5FF', top:'11rem',width:'21rem', height:'11rem',left:'-44rem'}}></div>
   


       
        
    </div>
  </div>
  )
}

export default Intro
