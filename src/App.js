

import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import { useContext } from "react";
import { themeContext } from "./Context";




function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;




  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    
    >
    <Navbar/>
    <Intro/>
    <Services/>
    <h1 style={{fontWeight:'bold', textAlign:'center', fontSize:'2rem', color:'orange'}}>SKILLS</h1>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
