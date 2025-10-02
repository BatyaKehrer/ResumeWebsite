import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>Your City, Country</span>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

