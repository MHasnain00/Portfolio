import '../styles/Projects.css';
import { GiSkills } from "react-icons/gi";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";

function Projects() {


  return (
    <>
        <div className="projects">
          <div className="p-title"><h3>Web Development Projects:</h3></div>
          <div className="li">
            <ul>
              <li>Developed a functional clone of Amazon’s main page featuring a hero section, search bar, product listings with images and details, along with a custom header and footer.</li>
              <li>Built a personal portfolio website using React, including dedicated sections for About, Resume, Projects, Certificates, and Contact.</li>
              <li>Created an interactive Hangman-style web game that challenges users to guess words within a limited number of attempts.</li>
              <li>Designed a customizable password generator allowing users to set desired length and include symbols or numbers.</li>
              <li>Developed an e-commerce store interface to display and organize shop items.</li>
              <li>Implemented a general-purpose calculator capable of performing standard arithmetic operations.</li>
              
            </ul>
          </div>
          <div className="p-title g-title"><h3>Game Development Projects:</h3></div>
          <div className="li">
            <ul>
              <li>Built a 2D platformer game featuring smooth player movement, obstacles, and level progression.</li>
              <li>Developed a 3D platformer game with character controls, environment interaction, and collectible items.</li>
              <li>Created a 2D space shooter game where players control a spaceship to destroy incoming enemies and avoid collisions.</li>
              <li>Designed a 3D first-person shooter (FPS) game with realistic movement, targeting, and combat mechanics.</li>
              <li>Developed a 3D maze game challenging players to navigate and find the exit within a complex environment.</li>
            </ul>
          </div>
        </div>
        <div className="skills">
            <div className='skills-title'>
              <div className="icon"><GiSkills /></div>
              <h2>Skills</h2>
            </div>
            <div className="skills-zone">
              <div className="html skill">
                <h4>HTML</h4>
                <TiHtml5  className='icon skill-icon'/>
              </div>
              <div className="css skill">
                <h4>CSS</h4>
                <IoLogoCss3  className='icon skill-icon'/>
              </div>
              <div className="js skill">
                <h4>JavaScript</h4>
                <TbBrandJavascript  className='icon skill-icon'/>
              </div>
              <div className="react skill">
                <h4>React</h4>
                <IoLogoReact  className='icon skill-icon'/>
              </div>
              <div className="py skill">
                <h4>Python</h4>
                <FaPython  className='icon skill-icon'/>
              </div>
              <div className="cpp skill">
                <h4>C++</h4>
                <TbBrandCpp  className='icon skill-icon'/>
              </div>
              <div className="unity skill">
                <h4>Unity</h4>
                <FaUnity className='icon skill-icon'/>
              </div>
            </div>
            <div className="space"></div>
          </div>
        
    </>
  )
}



export default Projects;