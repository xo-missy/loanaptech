import React from 'react';
import "./Contact.css";
function Contact () {
    return(
        <div className='contact-page'>

<div className='contact-container'>
    <h1>Contact Us</h1>
    <p>We are here to help you!. Reach out anytime</p>
    <div className='contact-info'>
        <div className='info-item'>
          <strong>Email:</strong> support@loanaptech.com  
        </div>
        <div className='info-item'>
            <strong>Phone:</strong> +1 (555) 123-4567
            
        </div>
        <div className='info-item'>
            <strong>Hours:</strong> Mon-Fri 9AM-6PM EST
        </div>
    </div>
    <form className='contact-form'>
        <input type="text" id="name" placeholder="Your Name"/>
        <input type="email" id="email" placeholder="Email Address"/>
        <textarea id="message" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
    </form>
</div>
        </div>
    );
} 
export default Contact;