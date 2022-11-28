import '../App.css';

function Header() {
  return (
    <div className="header">
      <div className="header--div1">
        <p className="header-hi fadeLeft">Hi, I am </p>
        <h1 className="header--name fadeRight">Shiv Pratap Singh Yadav</h1>
        <h3 className="header--work fadeLeft">FULL STACK WEB DEVELOPER </h3>
        <p className="fadeRight">
          I’m a MERN stack web developer with the
          <br />
          development skills based in Gwalior, Madhya Pradesh.
        </p>
        <button className="btn fadeLeft">
          <a className="btn_contact" href="#contact" style={{ color: "#000" }}>
            <p className="contact_btn_text">Contact me</p>
            <img className="contact_btn_icon" src="https://www.svgrepo.com/show/231324/message.svg"
            width="20px"
            height="20px"/> 
          </a>
        </button>
        <button className="btn fadeLeft">
          <a target='you' className="btn_github" href="https://github.com/shivprataps123" style={{ color: "#000" }}>
            <p>GitHub</p>
            <img src="https://www.svgrepo.com/show/343674/github.svg"
                     width="30px"
                     height="20px"
                     />
          </a>
        </button>
      </div>
     
      <div className="avtar_img zoomIn">
      <img id="home_pic" src={'https://avatars.githubusercontent.com/u/110032571?v=4'}></img>
      
      </div>
    </div>
  );
}

export default Header;