import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Brew Haven</h3>
            <p>Your perfect coffee experience since 2010</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>123 Coffee Street</p>
            <p>New York, NY 10001</p>
            <p>info@brewhaven.com</p>
          </div>
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Mon-Fri: 7am - 8pm</p>
            <p>Sat-Sun: 8am - 9pm</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;