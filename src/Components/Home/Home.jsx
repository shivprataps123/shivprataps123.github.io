//import img from "./hemant.jpeg";
import Typewriter from 'typewriter-effect'
import React from "react";
import {BiDownload} from 'react-icons/bi'
import pdfs from '../../fp06_006-Shiv_Pratap_Singh_Yadav_Resume.pdf'
//import ReactDOM from 'react-dom/client';
import "./Home.css";
let pdf="https://drive.google.com/uc?export=download&id=1FDi6FTc3jF13LVBwpJlRNpdCgthyZ53k"

const Home=()=>{
  return (

    <div id="home">
      <div className="name">
        <h1 className='text-color f7'>Hi there!</h1>
		    <h1 className='text-color f7'>I am Shiv Pratap Singh Yadav</h1>
          <h1>
              <Typewriter
                className='auto-type'
                options={{
                  strings: [
                      "A Full Stack Web Developer.",
                      "A Problem Solver.",
                  ],
                   autoStart: true,
                  loop: true,
                  deleteSpeed: 80,
                }}
              />
          </h1>
        <a
          href={pdf}
          target=""
          rel="noreferrer"
          download
        >
          <button className='portButton'>Resume<BiDownload className="download"/></button>
        </a>
      </div>
      <div>
        <img src={'https://avatars.githubusercontent.com/u/110032571?v=4'} alt="shiv" />
      </div>
    </div>
  );
}
export default Home;

