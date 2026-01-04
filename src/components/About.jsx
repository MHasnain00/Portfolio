import '../styles/About.css'
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoGameControllerSharp } from "react-icons/io5";


function About() {

  
  return (
    <>
      <div className="intro">
        <p>
          I’m Muhammad Hasnain from Khan Bela, Punjab, Pakistan, passionate about technology and creative problem-solving. I’m currently pursuing a BS in Software Engineering at Virtual University of Pakistan, where I’m building a strong foundation in programming, software design, and modern development tools. <br /><br />
          My skills include HTML, CSS, JavaScript, and React, along with a growing interest in frontend development and Unity game design. I’ve created projects like an e-commerce Amazon clone, a Hangman-style game, and a simple calculator, which helped me strengthen my understanding of user interfaces and clean code practices. <br /><br />
          My career goal is to become a skilled software engineer with a focus on building interactive, efficient, and visually engaging applications. I value job stability, continuous learning, and real-world problem-solving, and I’m always working to expand my skills to stay competitive in the IT field.
        </p>
      </div>
      <p className="i-do">What I do?</p>
      <div className="skill-section">
        <div className="web">
          <div className="logo-icon"><p><LiaLaptopCodeSolid /></p></div>
          <div className="text">
            <div className="title"><p>Web Developement</p></div>
            <div className="desc"><p>I can develop fully responsive and user-friendly websites using HTML, CSS, JavaScript, and React.</p></div>
          </div>
        </div>
        <div className="game">
          <div className="logo-icon"><p><IoGameControllerSharp /></p></div>
          <div className="text">
            <div className="title"><p>Game Developement</p></div>
            <div className="desc"><p>I can develop 2D and 3D games with engaging mechanics and smooth performance.</p></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About