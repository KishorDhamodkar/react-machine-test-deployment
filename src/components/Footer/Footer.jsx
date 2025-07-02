import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerWrapper}>
      <div className={styles.column}>
        <h4>About Us</h4>
        <ul>
          <li>Support Center</li>
          <li>Customer Support</li>
          <li>About Us</li>
          <li>Copyright</li>
          <li>Popular Campaign</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h4>Our Information</h4>
        <ul>
          <li>Return Policy</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Site Map</li>
          <li>Store Hours</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h4>My Account</h4>
        <ul>
          <li>Press inquiries</li>
          <li>Social media</li>
          <li>directories</li>
          <li>Images & B-roll</li>
          <li>Permissions</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h4>Policy</h4>
        <ul>
          <li>Application security</li>
          <li>Software principles</li>
          <li>Unwanted software policy</li>
          <li>Responsible supply chain</li>
        </ul>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
