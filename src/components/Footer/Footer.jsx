import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img 
              src="./src/components/Image/NGO_logo.jpg" 
              alt="ASHA WELFARE SOCIETY Logo" 
              className="footer-logo"
            />
            <p>
              Empowering communities and transforming lives through sustainable development 
              and social welfare initiatives.
            </p>
            <div className="social-links">
              <a href="#facebook">📱</a>
              <a href="#twitter">🐦</a>
              <a href="#instagram">📸</a>
              <a href="#linkedin">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Our Programs</a></li>
              <li><a href="#volunteer">Volunteer</a></li>
              <li><a href="#donate">Donate</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>123 Welfare Street</p>
            <p>Chelsea, NY 10001</p>
            <p>Email: info@ashawelfare.org</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Stay updated with our latest news and events.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ASHA WELFARE SOCIETY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer