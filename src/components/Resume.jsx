// Resume.jsx
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Resume = () => {
  const education = [
    {
      degree: "BS Software Engineering (BSSE)",
      school: "Virtual University of Pakistan",
      duration: "2023 - 2027",
      description: "Currently pursuing a BS in Software Engineering, now in the 6th semester, with a strong focus on practical development and modern technologies."
    },
    {
      degree: "Diploma of Associate Engineering (DAE)",
      school: "PBTE Lahore",
      duration: "2019 - 2022",
      description: "Completed a Diploma of Associate Engineering in Mechanical Technology, gaining a solid foundation in technical problem-solving and applied engineering principles."
    },
    {
      degree: "Matriculation in Science",
      school: "BISE Bahawalpur",
      duration: "2017 - 2019",
      description: "Completed Matriculation in Science, developing an early interest in computers and technical subjects."
    }
  ];

  const experience = [
    {
      role: "Inspection Apprenticeship",
      company: "Fauji Fertilizer Company Limited (FFC)",
      duration: "2023 - 2025",
      description: "Completed a two-year apprenticeship as an Inspection Technician, gaining valuable hands-on experience in industrial inspection and maintenance practices."
    }
  ];

  return (
    <section className="resume-section">
      <div className="resume-container">
        
        {/* Education Section */}
        <div className="resume-block">
          <h2 className="section-title">
            <FaGraduationCap />
            Education
          </h2>
          
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{edu.degree}</h3>
                    <span className="timeline-date">
                      <FaCalendarAlt />
                      {edu.duration}
                    </span>
                  </div>
                  <h4 className="timeline-subtitle">{edu.school}</h4>
                  <p className="timeline-desc">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="resume-block">
          <h2 className="section-title">
            <FaBriefcase />
            Experience
          </h2>
          
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.role}</h3>
                    <span className="timeline-date">
                      <FaCalendarAlt />
                      {exp.duration}
                    </span>
                  </div>
                  <h4 className="timeline-subtitle">{exp.company}</h4>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;