import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import("./Project.css");
let img='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-2_large.gif?v=1644395072'


export default function Proj(props) {

  return (
    <div id="project" className="proj">
      <h1 className="h14">My Recent Work</h1>
      <div className="projCont">
       

         <div className="final">
          <div className="img">
            <img src={'data:image/jpeg;base64,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'} alt="" />
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
            <img src={img} alt="" />
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
            <img src={'data:image/jpeg;base64,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'} alt="" />
          </div>
          <div>
            <h2> Foodians clone</h2>
            <p>
              Foodians is an International food brand 
              Company. It is an food Website Clone Where Users can see food Items through this website.
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
                 <p>ReactJs</p> 
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