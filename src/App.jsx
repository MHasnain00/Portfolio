// App.jsx
import './App.css'
import myImage from './Assets/myimage.jpg';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects'
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { IoIosMail } from "react-icons/io";
import { FaLocationDot, FaBars, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const location = useLocation();

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/resume", label: "Resume" },
    { to: "/projects", label: "Projects" },
    { to: "/certificates", label: "Certificates" },
    { to: "/contact", label: "Contact" }
  ]

  const currentPage = navLinks.find(link => link.to === location.pathname)?.label || "About";

  useEffect(() => {
    setSidebarOpen(false)
    setMobileNavOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileNavOpen &&!e.target.closest('.mobile-nav-toggle') &&!e.target.closest('.mobile-nav-dropdown')) {
        setMobileNavOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileNavOpen])

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`sidebar ${sidebarOpen? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="profile">
            <img src={myImage} alt="Muhammad Hasnain" />
            <h2>Muhammad Hasnain</h2>
            <p className="tagline">Front-End Developer<br/>Unity Game Developer</p>
          </div>

          <div className="sidebar-divider"></div>

          <div className="sidebar-contact">
            <a href="mailto:MuhammadHasnainGct@gmail.com" className="contact-row">
              <IoIosMail />
              <span>MuhammadHasnainGct@gmail.com</span>
            </a>
            <div className="contact-row">
              <MdOutlinePhoneIphone />
              <span>+92 304 8412972</span>
            </div>
            <div className="contact-row">
              <FaLocationDot />
              <span>Rahim Yar Khan, Punjab</span>
            </div>
          </div>

          <div className="sidebar-divider"></div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/mhasnain000/" target='_blank' rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/" target='_blank' rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="top-header">
          <div className="header-inner">
            <h1 className="current-page">{currentPage}</h1>

            {/* Desktop Nav - 1280px+ */}
            <nav className="main-nav">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link ${currentPage === link.label? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile/Small Laptop Nav Button - <1280px */}
            <button
              className="mobile-nav-toggle"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                setMobileNavOpen(!mobileNavOpen)
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileNavOpen? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Dropdown Nav - <1280px */}
          <nav className={`mobile-nav-dropdown ${mobileNavOpen? 'open' : ''}`}>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${currentPage === link.label? "active" : ""}`}
                onClick={() => setMobileNavOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="page-container">
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certificates' element={<Certificates />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </main>

      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
    </>
  )
}

export default App