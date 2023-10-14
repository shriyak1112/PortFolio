import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Skills.css'
const Skills = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
   
    <div className='skills' id='skills'>
         
        <div className='achievement'>

        <div className='blur sk-blur1' style={{background:'#ABF1FF94'}}></div>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>95%</div>
            <span style={{color: darkMode?'white':''}}>Frontend</span>           
        </div>

        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>80%</div>
            <span style={{color: darkMode?'white':''}}>Backend</span>           
        </div>

        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>70%</div>
            <span style={{color: darkMode?'white':''}}>Design</span> 

             <div className='blur sk-blur2' style={{background:'var(--purple'}}></div>          
        </div>

      
    </div>
  )
}

export default Skills
