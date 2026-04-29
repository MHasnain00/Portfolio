// Projects.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiFirebase, SiUnity } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import FPS3D from"../Assets/3DFPS.png";
import Platformer3D from"../Assets/3DPlatformer.png";
import Platformer2D from"../Assets/2DPlatformer.png";
import Maze3D from"../Assets/3DMaze.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Crypto Analytics Dashboard",
      description: "Engineered a real-time cryptocurrency analytics dashboard using React and TradingView Lightweight Charts, integrating WebSocket-based live data streams from Binance to deliver interactive heatmaps, candlestick charts, and market insights.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&h=400&fit=crop",
      tech: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <BsGraphUp />, name: "TradingView" },
      ],
      github: "https://github.com/",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Developed a responsive personal portfolio using React, implementing modular components and optimized UI/UX to showcase projects, certifications, and professional profile.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
      tech: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" }
      ],
      github: "https://github.com/",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "3D FPS Game",
      description: "Engineered a 3D first-person shooter in Unity, incorporating player movement, targeting mechanics, and combat systems with optimized performance.",
      image: FPS3D,
      tech: [
        { icon: <SiUnity />, name: "Unity" },
        { icon: <TbBrandCSharp />, name: "C#" }
      ],
      github: "https://github.com/",
      live: "https://example.com"
    },
    {
      id: 4,
      title: "3D Platformer Game",
      description: "Built a 3D platformer in Unity with advanced player controls, environmental interaction, and collectible-driven gameplay systems.",
      image: Platformer3D,
      tech: [
        { icon: <SiUnity />, name: "Unity" },
        { icon: <TbBrandCSharp />, name: "C#" }
      ],
      github: "https://github.com/",
      live: "https://example.com"
    },
    {
      id: 5,
      title: "2D Platformer Game",
      description: "Designed and developed a 2D platformer game in Unity using C#, implementing physics-based movement, collision detection, and level progression mechanics.",
      image: Platformer2D,
      tech: [
        { icon: <SiUnity />, name: "Unity" },
        { icon: <TbBrandCSharp />, name: "C#" }
      ],
      github: "https://github.com/",
      live: "https://example.com"
    },
    {
      id: 6,
      title: "3D Maze Game",
      description: "Developed a 3D maze navigation game in Unity, focusing on spatial logic, player navigation, and environment-based challenges.",
      image: Maze3D,
      tech: [
        { icon: <SiUnity />, name: "Unity" },
        { icon: <TbBrandCSharp />, name: "C#" }
      ],
      github: "https://github.com/",
      live: "https://example.com"
    },

    
  ];

  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <div key={index} className="tech-item">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;