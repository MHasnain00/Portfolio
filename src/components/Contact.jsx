import '../styles/Contact.css';
import contactImg from '../Assets/contact.jpg';

function Contact() {


  return (
    <>
      <div className="contact-main">
        <div className='form'>
            <div className="contact-name inp">
              <label htmlFor="">Name:</label>
              <input type="text" placeholder='Enter name'/>
            </div>
            <div className="contact-mail inp">
              <label htmlFor="">Email:</label>
              <input type="email" placeholder='Enter Email'/>
            </div>
            <div className="contact-msg inp">
              <label htmlFor="">Message:</label>
              <textarea cols="30" rows="8" placeholder='Enter your message here'></textarea>
            </div>
            <div className="contact-btn"><button type="button">Submit</button></div>

        </div>
      </div>
    </>
  )
}



export default Contact;