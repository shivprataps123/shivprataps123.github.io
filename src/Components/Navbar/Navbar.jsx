import Link from "react-scroll/modules/components/Link";
import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Shiv</h1>
      </div>
      <input id="checkbox" type="checkbox" />
      <div id="bar">
        <label htmlFor="checkbox">
        {/* <i class="fa fa-bar-chart"></i> */}
        <i class="fa-solid fa-bars"></i>
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
          href="https://drive.google.com/file/d/1FDi6FTc3jF13LVBwpJlRNpdCgthyZ53k/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <li>Resume</li>
        </a>
      </ul>
    </div>
  );
}