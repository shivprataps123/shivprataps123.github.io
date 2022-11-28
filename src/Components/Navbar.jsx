import "../App.css";
import { useState } from "react";
function Navbar() {
  const [toggle, settoggle] = useState(false);
  const [small, setsmall] = useState("");
  return (
    <div className="navbar">
      <div className="logo">
        <img
        src={'https://avatars.githubusercontent.com/u/110032571?v=4'}
          width="60px"
          height="60px"
          alt="shiv_logo"
          style={{ borderRadius: "30%" }}
        />
      </div>
      <div
        className="menu_toggle"
        onClick={() => {
          settoggle(!toggle);
          setsmall("small");
        }}
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-2/128/menu-512.png"
          width="50px"
          height="50px"
          alt=""
        />
      </div>
      <div
        className={
          toggle && small === "small" ? "small_nav right--nav" : "right--nav"
        }
      >
        <div
          className="active"
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#Home">Home</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#about">About me</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#tech">Tech stack</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#projects">Projects</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#contact">Contact Me</a>
        </div>
        <div className="cv">
          <a
            href="https://drive.google.com/file/d/1FDi6FTc3jF13LVBwpJlRNpdCgthyZ53k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000" }}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;