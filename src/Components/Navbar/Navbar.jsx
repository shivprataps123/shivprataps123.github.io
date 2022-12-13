import Link from "react-scroll/modules/components/Link";
import React from "react";
import Hamburger from  'hamburger-react';
import "./Navbar.css";

//import {GiHamburgerMenu} from 'react-icons/gi'
import pdf from '../../Shiv_Pratap_Singh_Yadav_Resume.pdf'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="logo-h1" style={{fontFamily:"cursive"}}>Shiv.Pr</h1>
      </div>
      <input id="checkbox" type="checkbox" />
      <div id="bar">
        <label htmlFor="checkbox">
        
      <Hamburger className="Hamburger"/>
        </label>
      </div>
      <ul className="nav-ul">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="skill" smooth={true} duration={500}>
          <li>Skills</li>
        </Link>
        <Link to="project" smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          download
        >
          <li>Resume</li> 
          
        </a>
      </ul>
      
    </div>
    
  );
}