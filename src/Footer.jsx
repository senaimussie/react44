// src/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Features</h4>
        <ul>
          <li><a href="#cool-stuff">Cool stuff</a></li>
          <li><a href="#random-feature">Random feature</a></li>
          <li><a href="#team-feature">Team feature</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Resources</h4>
        <ul>
          <li><a href="#resource">Resource</a></li>
          <li><a href="#resource-name">Resource name</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>About</h4>
        <ul>
          <li><a href="#team">Team</a></li>
          <li><a href="#locations">Locations</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
