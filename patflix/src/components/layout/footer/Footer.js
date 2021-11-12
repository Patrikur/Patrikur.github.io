import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
          <div className="social">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-facebook-square"></i>
          </div>
          <div className="links">
            <ul>
              <li><a href="https://netflix.com">Legal Notices</a></li>
              <li><a href="https://netflix.com">Privacy</a></li>
              <li><a href="https://netflix.com">Contact</a></li>
            </ul>
          </div>
          <span>© 2021 Patrikur</span>
        </div>
    )
};

export default Footer;