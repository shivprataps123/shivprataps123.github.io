import React from "react";
import("./About.css");

export default function About() {
  return (
    <div className="about-sec">
      <div className="main-about">

          <div className="about-1">
              <img className="about-img" src={'https://media.istockphoto.com/id/1285083846/photo/3d-illustration-of-smiling-man-with-ok-gesture-showing-business-charts-at-screen-laptop.jpg?s=170667a&w=0&k=20&c=LKCHGENMpwSC0eMgrFzSJk2OOl1jqA_YYe0tTBxVVLs='} alt="" />
          </div >

          <div className="about-2">
            <h2 className="me">About Me</h2>
              <p>
                I am a Full-stack web developer from India. Self motivated and
                curious with a keen interest in building user friendly products. My
                field of interests are building new web technologies, products and
                also in areas related to deep learning. I love to create beautiful
                and efficient websites for users. I keenly apply my knowledge for
                developing products with node.js, modern Javascript Library,
                mongoDB, express and frameworks like react.js
              </p>
          </div>

        </div>
    </div>
   
  );
}