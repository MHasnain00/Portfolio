import '../styles/Resume.css';
import { IoBookSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";



function Resume() {


  return (
    <>
        <div className="resume">
          <div className="education">
            <div className="side-line">
              <div className="icon edu-icon"><IoBookSharp /></div>
              <div className="vert-line line1"></div>
              <div className="line-circle"></div>
              <div className="vert-line line2"></div>
              <div className="line-circle"></div>
              <div className="vert-line line3"></div>
              <div className="line-circle"></div>
              <div className="icon exp-icon"><MdWork /></div>
              <div className="vert-line line4"></div>
              <div className="line-circle"></div>
            </div>
            <div className="content">
              <h2>Education</h2>
              <h4 className='bsse'>BS Software Engineering (BSSE)</h4>
              <p className='year'>2023 - 2027</p>
              <p className='edu-details'>Currently pursuing a BS in Software Engineering at Virtual University of Pakistan, now in the 5th semester, with a strong focus on practical development and modern technologies.
              </p>
              <h4 className='dae'>Diploma of Associate Engineering (DAE)</h4>
              <p className='year'>2019 - 2022</p>
              <p className='edu-details'>Completed a Diploma of Associate Engineering (DAE) in Mechanical Technology from PBTE Lahore, gaining a solid foundation in technical problem-solving and applied engineering principles.</p>
              <h4 className='matric'>Matriculation in Science</h4>
              <p className='year'>2017 - 2019</p>
              <p className='edu-details'>Completed Matriculation in Science from BISE Bahawalpur, developing an early interest in computers and technical subjects.</p>
              <h2>Experience</h2>
              <h4 className='bsse'>Inspection Apprenticeship</h4>
              <p className='year'>2023 - 2025</p>
              <p className='edu-details'>Completed a two-year apprenticeship as an Inspection Technician at Fauji Fertilizer Company Limited (FFC), gaining valuable hands-on experience in industrial inspection and maintenance practices.</p>
            </div>
          </div>
        </div>
    </>
  )
}



export default Resume;