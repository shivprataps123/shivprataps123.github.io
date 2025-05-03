import React from "react";
import("./About.css");

export default function About() {
  return (
    <div className="about-sec">
      <div className="main-about">
        <div className="about-1">
          <img
            className="about-img"
            src={
              "https://media.istockphoto.com/id/1285083846/photo/3d-illustration-of-smiling-man-with-ok-gesture-showing-business-charts-at-screen-laptop.jpg?s=170667a&w=0&k=20&c=LKCHGENMpwSC0eMgrFzSJk2OOl1jqA_YYe0tTBxVVLs="
            }
            alt=""
          />
        </div>

        <div className="about-2">
          <h2 className="me">About Me</h2>
          <p>
            I’m a passionate Frontend Engineer with 2+ years of experience
            building dynamic, responsive, and scalable web applications. I
            specialize in modern JavaScript (ES6+), React, Redux, and UI/UX
            design principles to deliver pixel-perfect, high-performance
            interfaces. Whether it's crafting intuitive dashboards, integrating
            REST APIs, or optimizing performance, I bring clean code and strong
            problem-solving skills to every project.
          </p>
        </div>
      </div>
    </div>
  );
}
