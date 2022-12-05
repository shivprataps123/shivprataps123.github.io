import React from "react";
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
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shiv-pratap-singh-yadav-252b25236/overlay/contact-info/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/ShivPra13467191"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright" style={{textAlign:"center"}}>
        No © copyright issues | Inspired by Manoj
      </div>
    </>
  );
}