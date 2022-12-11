//import img from "./hemant.jpeg";
import React from "react";

import pdf from '../../Shiv_Pratap_Singh_Yadav_Resume.pdf'
//import ReactDOM from 'react-dom/client';
import "./Home.css";


const Home=()=>{
  return (
    <div id="home">
      <div className="name">
        <h1>Hi there!</h1>
		<h1>I am Shiv Pratap Singh Yadav</h1>
        {/* <div className="typed_wrap">
                     <h1> <span>I am</span> <span className="typed"></span></h1>
                   </div> */}
        <h1>Full-Stack Web Developer</h1>
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          download
        >
          <button>Resume</button>
        </a>
      </div>
      <div>
        <img src={'https://avatars.githubusercontent.com/u/110032571?v=4'} alt="" />
      </div>
    </div>
  );
}
export default Home;

