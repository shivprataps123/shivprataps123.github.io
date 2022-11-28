//import "../styles/about.css";
import '../styles/about.css'
function About() {
  return (
    <div className="container" data-aos={"fade-right"}>
      <div className="container__image">
        <div className="container__info container__author">
          Hi there,
         
        </div>
        <div className="container__info container__location">
          <p>
            I am <em></em>
            <a target='new' href="https://www.linkedin.com/in/shiv-pratap-singh-yadav-252b25236/" className="link">
              Shiv Pratap Singh Yadav
            </a>{" "}
            , self-motivated, hardworking aspiring full-stack web developer. I like to build websites/application
            that serves the world. <br></br>and always want to enhance my
            knowledge & adpot new technologies that make impact on people.
          </p>
          <div>
            <h2>Education</h2>
            {/* <br/> */}
            <div>
              <h4> ~ Full Stack Web Development -- Nov,2022-Present</h4>
              <p>Masai School, Bengaluru, Karnataka</p>

            </div>
            <hr/>
            <div>
              <h4> ~ Intermediate -- 2019-2020 </h4>
              <p>Stream Science</p>
              <p>Sunrise International School Nowgong, M.P.  </p>
              <p>Status - First Division </p>
            </div>
            <hr/>
            <div>
              <h4> ~ High School -- 2017-2018 </h4>
              <p>All Subjects</p>
              <p>Saraswati Gyanodaya H.S. School Naigaon, M.P.</p>
              <p>Status - First Division </p>
            </div>
            <hr/>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;