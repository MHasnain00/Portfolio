// Contact.jsx
import { useState } from 'react';
import { IoIosMail } from "react-icons/io";
import { FaLocationDot, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here - EmailJS, Formspree, etc.
    setStatus('sending');
    
    // Simulated success - replace with real API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p className="contact-intro">
            Have a project in mind or want to collaborate? Feel free to reach out. 
            I'm always open to discussing new opportunities.
          </p>

          <div className="contact-details">
            <a href="mailto:MuhammadHasnainGct@gmail.com" className="contact-item">
              <div className="contact-icon">
                <IoIosMail />
              </div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <span className="contact-value">MuhammadHasnainGct@gmail.com</span>
              </div>
            </a>

            <div className="contact-item">
              <div className="contact-icon">
                <MdOutlinePhoneIphone />
              </div>
              <div className="contact-text">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+92 304 8412972</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaLocationDot />
              </div>
              <div className="contact-text">
                <span className="contact-label">Location</span>
                <span className="contact-value">Rahim Yar Khan, Punjab</span>
              </div>
            </div>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-social">
            <span className="social-title">Connect with me</span>
            <div className="social-links-contact">
              <a href="https://github.com/MHasnain00" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mhasnain000/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${status}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Sending...'
              ) : status === 'success' ? (
                'Message Sent!'
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;