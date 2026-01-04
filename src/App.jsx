// Assets
import './App.css'
import myImage from './Assets/myimage.jpg';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects'
import Certificates from './components/Certificates';
import Contact from './components/Contact';
// Hooks
import { IoIosMail } from "react-icons/io";
import { FaLocationDot, FaLaptopCode } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [pageTitle, setPageTitle] = useState("About")

  return (
    <>
      <div className="mobile">
        <nav className='mobile-nav'>
        <Link to="/about" onClick={() => {setPageTitle("About")}} className={`link ${pageTitle === "About"? "active" : ""}`}>About</Link>
        <Link to="/resume" onClick={() => setPageTitle("Resume")}  className={`link ${pageTitle === "Resume"? "active" : ""}`}>Resume</Link>
        <Link to="/projects" onClick={() => {setPageTitle("Projects")}} className={`link ${pageTitle === "Projects"? "active" : ""}`}>Projects</Link>
        <Link to="/certificates" onClick={() => setPageTitle("Certificates")} className={`link ${pageTitle === "Certificates"? "active" : ""}`}>Certificates</Link>
        <Link to="/contact" onClick={() => setPageTitle("Contact")} className={`link ${pageTitle === "Contact"? "active" : ""}`}>Contact</Link>
        </nav>
      </div>
    
    <div className="main-container">
      <div className="intro-section">
        <div className="profile-section">
          <div className="image-dev">
            <img src={myImage} alt="My Image" />
          </div>
          <p>Muhammad Hasnain</p>
          <button><a href="https://www.linkedin.com/in/mhasnain000/" target='_blank'>View Profile</a></button>
          <div className="line"></div>
        </div>
        <div className="contact-section">
          <div className="contact">
{/* Gmail */}
            <div className="icon">
              <IoIosMail/>
            </div>
            <div className='txt'><p>MuhammadHasnainGct@gmail.com</p></div>
          </div>
{/* Role */}
          <div className="contact">
            <div className="icon">
              <FaLaptopCode />
            </div>
            <div className='txt'><p>Front-End Developer | Unity Game Developer</p></div>
          </div>
          <div className="contact">
{/* Phone Number */}
            <div className="icon">
              <MdOutlinePhoneIphone />
            </div>
            <div className='txt ph'><p>+92304-8412972</p></div>
          </div>
{/* Address */}
          <div className="contact">
            <div className="icon">
              <FaLocationDot />
            </div>
            <div className='txt'><p>Khan Bela Rahim Yar Khan Pubjab Pakistan</p></div>
          </div>
        </div>
      </div>
      <div className="data-section">
        <div className="title-bar">
          <div className="selected-tab"><p>{pageTitle}</p></div>
          <div className="NavBar">
            <nav>
            <Link to="/about" onClick={() => {setPageTitle("About")}} className={`link ${pageTitle === "About"? "active" : ""}`}>About</Link>
            <Link to="/resume" onClick={() => setPageTitle("Resume")}  className={`link ${pageTitle === "Resume"? "active" : ""}`}>Resume</Link>
            <Link to="/projects" onClick={() => {setPageTitle("Projects")}} className={`link ${pageTitle === "Projects"? "active" : ""}`}>Projects</Link>
            <Link to="/certificates" onClick={() => setPageTitle("Certificates")} className={`link ${pageTitle === "Certificates"? "active" : ""}`}>Certificates</Link>
            <Link to="/contact" onClick={() => setPageTitle("Contact")} className={`link ${pageTitle === "Contact"? "active" : ""}`}>Contact</Link>
            </nav>
          </div>
        </div>
                      
        <Routes>
          <Route path='/' element={<Navigate to={"/about"}/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/projects' element= {<Projects />}></Route>
          <Route path='/certificates' element= {<Certificates />}></Route>
          <Route path='/contact' element= {<Contact />}></Route>
        </Routes>
        </div>
      </div>
    </>
  )
}

export default App