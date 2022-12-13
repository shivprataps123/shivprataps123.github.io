import React from "react";
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import("./Contact.css");

export default function Contact() {
  return (
    <>
      <div id="contact" className="connect">
        <div className="container">
          <h1>Contact Me</h1>
          <p>
            Drop me a mail at <strong>shivpratapsinghyadav38@gmail.com</strong>
          </p>
          <div className="links">
            <a
              href="https://github.com/shivprataps123"
              target="_blank"
              rel="noreferrer"
            >
             
              <AiFillGithub className="fontlink"/>
            </a>
            <a
              href="https://www.linkedin.com/in/shiv-pratap-singh-yadav-252b25236/overlay/contact-info/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="fontlink"/>
              
            </a>
            <a
              href="https://twitter.com/ShivPra13467191"
              target="_blank"
              rel="noreferrer"
            >
              {/* <i class="fab fa-twitter"></i> */}
              <AiFillTwitterSquare className="fontlink"/>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright" style={{textAlign:"center"}}>
        <h4>You can clone my website | Made by Shiv</h4>
      </div>
    </>
  );
}