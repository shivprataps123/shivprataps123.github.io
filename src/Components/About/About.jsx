import React from "react";
import("./About.css");

export default function About() {
  return (
    <div id="about">
      <h1 className="h11">About Me</h1>
      <div className="cont">
        <div id="img">
          <img src={'https://camo.githubusercontent.com/138094ef7b0b6590588c59954beddf9157e9396d568d2d93674e9d1ceb0bb11e/68747470733a2f2f6d65646961302e67697068792e636f6d2f6d656469612f7167515567674143335066763638377150432f67697068792e676966'} alt="" />
        </div>
        <div>
          <p style={{color:"white"}}>
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