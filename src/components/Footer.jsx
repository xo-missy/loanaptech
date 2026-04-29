import React from "react";
import "./Footer.css";
function Footer() {
    return (
<div className="footer">
    <div className="footer-container">
        <div className="footer-grid">
            <div className="footer-brand">
                <h2>LoanAptech</h2>
                <p>Your trusted partner for fast transparent, <br /> and affordable loans</p>
            </div>
            <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Loan Product</a></li>
                    <li><a href="#">Apply Now</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
            <div className="footer-contact">
              <ul>
                     <li><a href="#">Support</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of services</a></li>
                </ul>
                
            </div>
      

        <div className="footer-contact">
                <h3>Get in touch</h3>
                <p>support@loanaptech.com</p>
                <p>+1(555) 123-4567</p>
                <p>Mon-fri:9AM-6pm</p>
            </div>
  </div>
        <div className="footer-bottom">
            <p>&copy; 2023 LoanAptech. All rights reserved.</p>
        </div>
    </div>

</div>

    );
}

export default Footer;