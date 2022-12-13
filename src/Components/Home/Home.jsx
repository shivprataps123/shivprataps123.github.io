//import img from "./hemant.jpeg";
import Typewriter from 'typewriter-effect'
import React from "react";
import {BiDownload} from 'react-icons/bi'
import pdf from '../../Shiv_Pratap_Singh_Yadav_Resume.pdf'
//import ReactDOM from 'react-dom/client';
import "./Home.css";


const Home=()=>{
  return (
    <div id="home">
      <div className="name">
        <h1>Hi there!</h1>
		<h1>I am Shiv Pratap Singh Yadav</h1>
    <Typewriter
                options={{
                  strings: [
                      "A Full Stack Developer.",
                      "A Problem Solver.",
                  ],
                   autoStart: true,
                  loop: true,
                  deleteSpeed: 80,
                }}
              />
        {/* <h1>Full-Stack Web Developer</h1> */}
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          download
        >
          <button>Resume <BiDownload className="download"/></button>
         
        </a>
      </div>
      <div>
        <img src={'https://avatars.githubusercontent.com/u/110032571?v=4'} alt="shiv" />
      </div>
    </div>
  );
}
export default Home;

