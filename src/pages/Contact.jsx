import { useRef, useState } from 'react';

const Contact = () => {

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className='get'>Get In Touch</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      {/* New Image Section */}
      <section className="contact-image-section">
        <div className="container">
          <div className="image-grid">
            <div 
              className="image-item" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5')" }}
            >
              <div className="image-overlay">
                <h3>Our Cozy Corner</h3>
              </div>
            </div>
            <div 
              className="image-item" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498804103079-a6351b050096')" }}
            >
              <div className="image-overlay">
                <h3>Freshly Brewed</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-info">
            <h2>Visit Us</h2>
            <div className="info-item">
              <h3>Address</h3>
              <p>123 Coffee Street<br />New Palace, NY 10001</p>
            </div>
            <div className="info-item">
              <h3>Hours</h3>
              <p>Monday - Friday: 7am - 8pm<br />
              Saturday - Sunday: 8am - 9pm</p>
            </div>
            <div className="info-item">
              <h3>Contact</h3>
              <p>Phone: (212) 555-1234<br />
              Email: info@brewhaven.com</p>
            </div>
          </div>

              <form>
              <h1> Send Message</h1>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="user_name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="user_email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn primary">Send Message</button>
              </form>
          
          </div>
          </section>
        </div>
  );
};

export default Contact;