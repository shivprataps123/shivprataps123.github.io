import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import {SiChakraui} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import vella from '../../764x310_1.png';
import fabbag from '../../Women_s-page---Reveal.png'
import kind from '../../707-4819-m.png'
import Slider from "react-slick";
import("./Project.css");



export default function Proj(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <div id="project" className="proj">
      <h1 className="h14">My Recent Work</h1>
      <div className="projCont">
      <div className="final">
          <div className="img">
            <img src="https://user-images.githubusercontent.com/76995063/215413474-5d5820d4-bf83-4a7c-8b95-25b95995829b.png" alt="" />
          </div>
          <div>
            <h2 style={{fontSize:"20px"}}>MyTheresa clone</h2>
            <p>
            Mytheresa is the finest edit in luxury fashion for 
            women, men and kids. We have over 200 of the best 
            international designers, 600 new arrivals each week
             utmost security and data protection, and free returns and exchanges within 30 days.
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              {/* <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div> */}
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
               
              </div>
              <div>
                 <FaReact className='techfont'/> 
                 <p>React</p> 
              </div>
              <div>
                 <SiChakraui className='techfont'/> 
                 <p>Chakra UI</p> 
              </div>
              <div>
                 <SiRedux className='techfont'/> 
                 <p>Redux</p> 
              </div>
              
            </div>
            <div className="buttons">
              <a
                href="https://luminous-swan-cc6644.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/101beardo/goofy-shock-9631"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
      <div className="final">
          <div className="img">
            <img src={kind} alt="" />
          </div>
          <div>
            <h2 style={{fontSize:"20px"}}> Foodians clone</h2>
            <p>
              Foodians is an International food brand 
              Company. It is an food Website Clone Where Users can see food Items through this website.
              A platform for anyone, irregardless of age, gender or financial status, to save lives anywhere, anytime. Without requiring any effort, time or money.
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
               
              </div>
              <div>
                 <FaReact className='techfont'/> 
                 <p>React</p> 
              </div>
              
            </div>
            <div className="buttons">
              <a
                href="https://63aaaa0d46200d5048f590fd--shimmering-cassata-1c0a0d.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/shivprataps123/vigorous-ticket-1895/tree/main/my-app/src"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
         <div className="final">
          {/* ----------------------- */}
         
          <div className="img">
            <img src={vella} alt="" />
          </div>
          
          
          {/* ----------------------------------- */}
          <div>
            <h2 style={{fontSize:"20px"}}>Bella Vita Organic Clone</h2>
            <p>
              Bella Vita Organic.com is a leading Online skin care products in India that offers
              prescription cosmetics and its different products all over India.
              Vita provide Cosmetics to us which ensure skin health to all the
              individuals and chemicals free.  
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
              </div>
              <div>
                {/* <FaReact/> */}
                {/* <p>ReactJs</p> */}
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://willowy-snickerdoodle-617e85.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/shivprataps123/kind-stitch-7991"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>

       

        <div className="final">
          <div className="img">
            <img src={fabbag} alt="" />
          </div>
          <div>
            <h2 style={{fontSize:"20px"}}>Fabbag clone</h2>
            <p>
              Fabbag.com is a leading Online Cosmetics in India that offers
              prescription cosmetics and its different products all over India.
              Fabbag provide Cosmetics to us which ensure health to all the
              individuals and chemicals free.
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://unique-cranachan-f05ef7.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/Parag2510/verdant-straw-7365"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div> 
        
       

       
      </div>
    </div>
  );
}