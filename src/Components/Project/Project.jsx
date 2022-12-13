import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import vella from '../../764x310_1.png';
import fabbag from '../../Women_s-page---Reveal.png'
import kind from '../../707-4819-m.png'
import("./Project.css");



export default function Proj(props) {

  return (
    <div id="project" className="proj">
      <h1 className="h14">My Recent Work</h1>
      <div className="projCont">
       

         <div className="final">
          <div className="img">
            <img src={vella} alt="" />
          </div>
          <div>
            <h2>Bella Vita Organic Clone</h2>
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
            <h2>Fabbag clone</h2>
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
        <div className="final">
          <div className="img">
            <img src={kind} alt="" />
          </div>
          <div>
            <h2> Foodians clone</h2>
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
                href="https://637101ca12789d526d05c864--foodians.netlify.app/"
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
      </div>
    </div>
  );
}