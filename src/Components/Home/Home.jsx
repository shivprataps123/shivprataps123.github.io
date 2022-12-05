//import img from "./hemant.jpeg";
import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div id="home">
      <div className="name">
        <h1>Hi there!</h1>
        <h1>I'm Shiv Pratap Singh Yadav</h1>
        <h1>Full-Stack Web Developer</h1>
        <a
          href="https://drive.google.com/file/d/1FDi6FTc3jF13LVBwpJlRNpdCgthyZ53k/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
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