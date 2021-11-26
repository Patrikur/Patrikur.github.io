import React from 'react';
import ServiceCode from './ServiceCode';

const Footer = () => {
    return (
        <div className="footer">
          <div className="footer-container">
            <div className="social">
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/Netflix/"><i className="fab fa-facebook-square"></i></a></li>
                <li><a href="https://www.instagram.com/Netflix"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCNG0bMYut0wL3C9BS5ffQXw"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
            <div className="links">
              <div className="link-container">
                <ul>
                  <li><a href="https://netflix.com">Audio and Subtitles</a></li>
                  <li><a href="https://netflix.com">Media Center</a></li>
                  <li><a href="https://netflix.com">Privacy</a></li>
                  <li><a href="https://netflix.com">Contact Us</a></li>
                </ul>
              </div>
              <div className="link-container">
                <ul>
                  <li><a href="https://netflix.com">Audio Description</a></li>
                  <li><a href="https://netflix.com">Investor Relations</a></li>
                  <li><a href="https://netflix.com">Legal Notices</a></li>
                </ul>
              </div>
              <div className="link-container">
                <ul>
                  <li><a href="https://netflix.com">Help Center</a></li>
                  <li><a href="https://netflix.com">Jobs</a></li>
                  <li><a href="https://netflix.com">Cookie Preference</a></li>
                </ul>
              </div>
              <div className="link-container">
                <ul>
                  <li><a href="https://netflix.com">Gift Cards</a></li>
                  <li><a href="https://netflix.com">Terms of Use</a></li>
                  <li><a href="https://netflix.com">Corporate Information</a></li>
                </ul>
              </div>  
            </div>
            <ServiceCode />
            <div className="copyright">
              © 2021 Patrikur
            </div>
            
          </div>
          
        </div>
    )
};

export default Footer;